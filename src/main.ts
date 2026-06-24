import { tracks } from "./catalog";
import "./styles.css";

const TIMER_OPTIONS_MINUTES = [10, 20, 30, 45, 60] as const;
const MAX_VOLUME = 0.72;
const DEFAULT_VOLUME = 0.34;
const FADE_IN_MS = 1800;
const CROSSFADE_MS = 7000;
const FADE_OUT_MS = 8000;
const STORAGE_KEY = "ai-lullaby-radio-state";

type StoredState = {
  currentIndex?: number;
  volume?: number;
};

type PlayerState = {
  currentIndex: number;
  isPlaying: boolean;
  targetVolume: number;
  timerEndsAt: number | null;
  remainingMs: number | null;
  playbackStartedAt: number | null;
  playbackElapsedMs: number;
  isFadingOut: boolean;
  isCrossfading: boolean;
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const audioPlayers = [new Audio(), new Audio()] as const;

audioPlayers.forEach((player) => {
  player.preload = "metadata";
});

const readStoredState = (): StoredState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredState) : {};
  } catch {
    return {};
  }
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const storedState = readStoredState();

const state: PlayerState = {
  currentIndex: clamp(storedState.currentIndex ?? 0, 0, tracks.length - 1),
  isPlaying: false,
  targetVolume: clamp(storedState.volume ?? DEFAULT_VOLUME, 0, MAX_VOLUME),
  timerEndsAt: null,
  remainingMs: null,
  playbackStartedAt: null,
  playbackElapsedMs: 0,
  isFadingOut: false,
  isCrossfading: false,
};

let timerInterval: number | null = null;
let playbackInterval: number | null = null;
let activeAudioIndex = 0;
let transitionToken = 0;
const volumeRampIntervals = new WeakMap<HTMLAudioElement, number>();

const persistState = () => {
  const nextState: StoredState = {
    currentIndex: state.currentIndex,
    volume: state.targetVolume,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
};

const getNextIndex = () => (state.currentIndex + 1) % tracks.length;

const getActiveAudio = () => audioPlayers[activeAudioIndex];

const getInactiveAudioIndex = () => (activeAudioIndex + 1) % audioPlayers.length;

const formatRemaining = (milliseconds: number | null) => {
  if (milliseconds === null) {
    return "выключен";
  }

  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const formatPlaybackTime = (milliseconds: number) => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const setAudioSource = (player: HTMLAudioElement, trackIndex: number) => {
  player.src = tracks[trackIndex].url;
  player.load();
};

const clearVolumeRamp = (player: HTMLAudioElement) => {
  const interval = volumeRampIntervals.get(player);

  if (interval !== undefined) {
    window.clearInterval(interval);
    volumeRampIntervals.delete(player);
  }
};

const rampVolume = (
  player: HTMLAudioElement,
  targetVolume: number,
  durationMs: number,
  onDone?: () => void,
) => {
  clearVolumeRamp(player);

  const startVolume = player.volume;
  const startedAt = performance.now();

  const interval = window.setInterval(() => {
    const elapsed = performance.now() - startedAt;
    const progress = clamp(elapsed / durationMs, 0, 1);
    player.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress >= 1) {
      clearVolumeRamp(player);
      player.volume = targetVolume;
      onDone?.();
    }
  }, 80);

  volumeRampIntervals.set(player, interval);
};

const stopAndResetAudio = (player: HTMLAudioElement, shouldResetPosition = true) => {
  clearVolumeRamp(player);
  player.pause();
  player.volume = 0;

  if (shouldResetPosition) {
    player.currentTime = 0;
  }
};

const clearPlaybackInterval = () => {
  if (playbackInterval !== null) {
    window.clearInterval(playbackInterval);
    playbackInterval = null;
  }
};

const updatePlaybackElapsed = () => {
  if (state.playbackStartedAt === null) {
    return;
  }

  state.playbackElapsedMs = Date.now() - state.playbackStartedAt;
  render();
};

const startPlaybackClock = () => {
  state.playbackStartedAt = Date.now() - state.playbackElapsedMs;
  clearPlaybackInterval();
  playbackInterval = window.setInterval(updatePlaybackElapsed, 1000);
};

const stopPlaybackClock = (shouldReset: boolean) => {
  clearPlaybackInterval();
  state.playbackStartedAt = null;

  if (shouldReset) {
    state.playbackElapsedMs = 0;
  }
};

const render = () => {
  const playbackStatus = state.isFadingOut
    ? "Плавно затихает"
    : state.isCrossfading
      ? "Мягко сменяется"
      : state.isPlaying
        ? "Тихо играет"
        : "Готово к вечеру";

  app.innerHTML = `
    <section class="hero" aria-labelledby="title">
      <p class="eyebrow">спокойный сон без суеты</p>
      <h1 id="title">AI-радио колыбельных</h1>
      <p class="subtitle">Тихая предсказуемая музыка для засыпания маленького ребенка: включите, выберите комфортную громкость и поставьте таймер.</p>
    </section>

    <section class="card now-playing" aria-label="Сейчас играет">
      <div>
        <p class="label">Сейчас</p>
        <h2>Спокойная музыка</h2>
        <p class="muted">Мягкие переходы без резких пауз и скачков громкости.</p>
      </div>
      <div class="playback-visual ${state.isPlaying ? "is-playing" : ""}" aria-label="${playbackStatus}">
        <div class="status-pill">${playbackStatus}</div>
        <div class="sleep-waves" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>

    <section class="card playback-time" aria-label="Время проигрывания">
      <div>
        <p class="label">Проигрывание</p>
        <p class="timer-value">${formatPlaybackTime(state.playbackElapsedMs)}</p>
      </div>
      <p class="muted">${state.isPlaying ? "Музыка звучит спокойно." : "Счётчик пойдёт после запуска музыки."}</p>
    </section>

    <section class="controls card" aria-label="Управление воспроизведением">
      <button class="primary" data-action="toggle-play">${state.isPlaying ? "Плавная пауза" : "Включить музыку"}</button>
      <button data-action="next">Мягко сменить</button>
    </section>

    <section class="card queue" aria-label="Очередь">
      <div>
        <p class="label">Дальше</p>
        <p class="queue-title">Следующая мягкая композиция</p>
      </div>
      <p class="muted">Спокойный порядок без случайных резких смен.</p>
    </section>

    <section class="card fieldset" aria-label="Громкость">
      <label for="volume">Громкость</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="${MAX_VOLUME}"
        step="0.01"
        value="${state.targetVolume}"
      />
      <p class="muted">${Math.round((state.targetVolume / MAX_VOLUME) * 100)}% от бережного максимума</p>
    </section>

    <section class="card timer" aria-label="Таймер сна">
      <div class="timer-header">
        <div>
          <p class="label">Таймер сна</p>
          <p class="timer-value">${formatRemaining(state.remainingMs)}</p>
        </div>
        <button data-action="clear-timer" ${state.timerEndsAt === null ? "disabled" : ""}>Сбросить</button>
      </div>
      <div class="timer-options">
        ${TIMER_OPTIONS_MINUTES.map(
          (minutes) => `<button data-timer="${minutes}">${minutes} мин</button>`,
        ).join("")}
      </div>
    </section>
  `;

  bindControls();
};

const playCurrentTrack = async () => {
  const token = ++transitionToken;
  const player = getActiveAudio();

  state.isFadingOut = false;
  state.isCrossfading = false;
  audioPlayers.forEach((audioPlayer) => {
    if (audioPlayer !== player) {
      stopAndResetAudio(audioPlayer);
    }
  });
  setAudioSource(player, state.currentIndex);
  player.volume = 0;
  await player.play();

  if (token !== transitionToken) {
    return;
  }

  state.isPlaying = true;
  startPlaybackClock();
  rampVolume(player, state.targetVolume, FADE_IN_MS);
  persistState();
  render();
};

const pausePlayback = () => {
  fadeOutAndStop({ clearTimer: false, resetPosition: false });
};

const fadeOutAndStop = ({
  clearTimer,
  resetPosition,
}: {
  clearTimer: boolean;
  resetPosition: boolean;
}) => {
  if (state.isFadingOut) {
    return;
  }

  const token = ++transitionToken;
  const player = getActiveAudio();

  state.isFadingOut = true;
  state.isCrossfading = false;
  render();

  audioPlayers.forEach((audioPlayer) => {
    if (audioPlayer !== player) {
      stopAndResetAudio(audioPlayer);
    }
  });

  rampVolume(player, 0, FADE_OUT_MS, () => {
    if (token !== transitionToken) {
      return;
    }

    stopAndResetAudio(player, resetPosition);
    state.isPlaying = false;
    state.isFadingOut = false;
    stopPlaybackClock(clearTimer && resetPosition);
    if (clearTimer) {
      state.timerEndsAt = null;
      state.remainingMs = null;
      clearTimerInterval();
    }
    persistState();
    render();
  });
};

const playNextTrack = async () => {
  const nextIndex = getNextIndex();

  if (!state.isPlaying) {
    state.currentIndex = nextIndex;
    setAudioSource(getActiveAudio(), state.currentIndex);
    persistState();
    render();
    return;
  }

  const token = ++transitionToken;
  const fromPlayer = getActiveAudio();
  const toIndex = getInactiveAudioIndex();
  const toPlayer = audioPlayers[toIndex];

  state.currentIndex = nextIndex;
  state.isFadingOut = false;
  state.isCrossfading = true;
  persistState();
  setAudioSource(toPlayer, state.currentIndex);
  toPlayer.volume = 0;
  await toPlayer.play();

  if (token !== transitionToken) {
    stopAndResetAudio(toPlayer);
    return;
  }

  activeAudioIndex = toIndex;
  render();

  rampVolume(fromPlayer, 0, CROSSFADE_MS, () => {
    if (token === transitionToken) {
      stopAndResetAudio(fromPlayer);
    }
  });

  rampVolume(toPlayer, state.targetVolume, CROSSFADE_MS, () => {
    if (token === transitionToken) {
      state.isCrossfading = false;
      render();
    }
  });
};

const clearTimerInterval = () => {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
};

const updateTimer = () => {
  if (state.timerEndsAt === null) {
    state.remainingMs = null;
    return;
  }

  state.remainingMs = Math.max(0, state.timerEndsAt - Date.now());

  if (state.remainingMs <= 0) {
    fadeOutAndStop({ clearTimer: true, resetPosition: true });
  }

  render();
};

const startTimer = (minutes: number) => {
  state.timerEndsAt = Date.now() + minutes * 60 * 1000;
  state.remainingMs = minutes * 60 * 1000;
  clearTimerInterval();
  timerInterval = window.setInterval(updateTimer, 1000);
  render();
};

const clearTimer = () => {
  state.timerEndsAt = null;
  state.remainingMs = null;
  clearTimerInterval();
  render();
};

const bindControls = () => {
  app.querySelector<HTMLButtonElement>('[data-action="toggle-play"]')?.addEventListener("click", () => {
    if (state.isPlaying) {
      pausePlayback();
      return;
    }

    playCurrentTrack().catch(() => {
      state.isPlaying = false;
      state.isCrossfading = false;
      state.isFadingOut = false;
      render();
    });
  });

  app.querySelector<HTMLButtonElement>('[data-action="next"]')?.addEventListener("click", () => {
    playNextTrack().catch(() => {
      state.isPlaying = false;
      state.isCrossfading = false;
      state.isFadingOut = false;
      render();
    });
  });

  app.querySelector<HTMLInputElement>("#volume")?.addEventListener("input", (event) => {
    const input = event.target as HTMLInputElement;
    state.targetVolume = clamp(Number(input.value), 0, MAX_VOLUME);
    const activePlayer = getActiveAudio();
    rampVolume(activePlayer, state.targetVolume, 700, () => {
      if (state.isCrossfading) {
        state.isCrossfading = false;
        render();
      }
    });
    persistState();
    render();
  });

  app.querySelector<HTMLButtonElement>('[data-action="clear-timer"]')?.addEventListener("click", clearTimer);

  app.querySelectorAll<HTMLButtonElement>("[data-timer]").forEach((button) => {
    button.addEventListener("click", () => {
      startTimer(Number(button.dataset.timer));
    });
  });
};

audioPlayers.forEach((player) => {
  player.addEventListener("ended", () => {
    if (player !== getActiveAudio() || state.isFadingOut) {
      return;
    }

    playNextTrack().catch(() => {
      state.isPlaying = false;
      state.isCrossfading = false;
      render();
    });
  });
});

getActiveAudio().volume = state.targetVolume;
setAudioSource(getActiveAudio(), state.currentIndex);
render();
