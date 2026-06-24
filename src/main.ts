import { catalogSummary, tracks, type Track } from "./catalog";
import "./styles.css";

const TIMER_OPTIONS_MINUTES = [10, 20, 30, 45, 60] as const;
const MAX_VOLUME = 0.72;
const DEFAULT_VOLUME = 0.34;
const FADE_IN_MS = 1800;
const FADE_OUT_MS = 12000;
const STORAGE_KEY = "ai-lullaby-radio-state";
const TRACK_TAG_LABELS = {
  calm: "спокойно",
  soft: "мягко",
  sleep: "для сна",
} satisfies Record<Track["tags"][number], string>;

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
  isFadingOut: boolean;
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

const audio = new Audio();
audio.preload = "metadata";

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
  isFadingOut: false,
};

let timerInterval: number | null = null;
let volumeRampInterval: number | null = null;

const persistState = () => {
  const nextState: StoredState = {
    currentIndex: state.currentIndex,
    volume: state.targetVolume,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
};

const getCurrentTrack = () => tracks[state.currentIndex];

const getNextIndex = () => (state.currentIndex + 1) % tracks.length;

const getNextTrack = () => tracks[getNextIndex()];

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

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

const setAudioSource = (track: Track) => {
  audio.src = track.url;
  audio.load();
};

const clearVolumeRamp = () => {
  if (volumeRampInterval !== null) {
    window.clearInterval(volumeRampInterval);
    volumeRampInterval = null;
  }
};

const rampVolume = (targetVolume: number, durationMs: number, onDone?: () => void) => {
  clearVolumeRamp();

  const startVolume = audio.volume;
  const startedAt = performance.now();

  volumeRampInterval = window.setInterval(() => {
    const elapsed = performance.now() - startedAt;
    const progress = clamp(elapsed / durationMs, 0, 1);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress >= 1) {
      clearVolumeRamp();
      audio.volume = targetVolume;
      onDone?.();
    }
  }, 80);
};

const render = () => {
  const currentTrack = getCurrentTrack();
  const nextTrack = getNextTrack();
  const currentTrackTags = currentTrack.tags.map((tag) => TRACK_TAG_LABELS[tag]).join(" · ");

  app.innerHTML = `
    <section class="hero" aria-labelledby="title">
      <p class="eyebrow">локальное радио для сна</p>
      <h1 id="title">AI-радио колыбельных</h1>
      <p class="subtitle">Тихая и предсказуемая очередь для вечернего прослушивания из локального MP3-каталога.</p>
    </section>

    <section class="card now-playing" aria-label="Сейчас играет">
      <div>
        <p class="label">Текущий трек</p>
        <h2>${currentTrack.title}</h2>
        <p class="muted">${formatDuration(currentTrack.duration)} · ${currentTrackTags}</p>
      </div>
      <div class="status-pill">${state.isPlaying ? "Тихо играет" : "На паузе"}</div>
    </section>

    <section class="controls card" aria-label="Управление воспроизведением">
      <button class="primary" data-action="toggle-play">${state.isPlaying ? "Пауза" : "Включить"}</button>
      <button data-action="next">Следующий трек</button>
    </section>

    <section class="card queue" aria-label="Очередь">
      <div>
        <p class="label">Следующий трек</p>
        <p class="queue-title">${nextTrack.title}</p>
      </div>
      <p class="muted">Спокойный порядок · без резких случайных переходов</p>
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

    <section class="card catalog" aria-label="Каталог">
      <p class="label">Каталог</p>
      <p>Загружено локальных MP3-треков: ${catalogSummary.availableTrackCount}.</p>
      <p class="muted">${catalogSummary.limitation}</p>
    </section>
  `;

  bindControls();
};

const playCurrentTrack = async () => {
  state.isFadingOut = false;
  setAudioSource(getCurrentTrack());
  audio.volume = 0;
  await audio.play();
  state.isPlaying = true;
  rampVolume(state.targetVolume, FADE_IN_MS);
  persistState();
  render();
};

const pausePlayback = () => {
  audio.pause();
  state.isPlaying = false;
  state.isFadingOut = false;
  clearVolumeRamp();
  persistState();
  render();
};

const fadeOutAndStop = () => {
  if (state.isFadingOut) {
    return;
  }

  state.isFadingOut = true;
  rampVolume(0, FADE_OUT_MS, () => {
    audio.pause();
    audio.currentTime = 0;
    state.isPlaying = false;
    state.isFadingOut = false;
    state.timerEndsAt = null;
    state.remainingMs = null;
    clearTimerInterval();
    render();
  });
};

const playNextTrack = async () => {
  state.currentIndex = getNextIndex();
  persistState();

  if (state.isPlaying) {
    await playCurrentTrack();
  } else {
    setAudioSource(getCurrentTrack());
    render();
  }
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
    fadeOutAndStop();
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
      render();
    });
  });

  app.querySelector<HTMLButtonElement>('[data-action="next"]')?.addEventListener("click", () => {
    playNextTrack().catch(() => {
      state.isPlaying = false;
      render();
    });
  });

  app.querySelector<HTMLInputElement>("#volume")?.addEventListener("input", (event) => {
    const input = event.target as HTMLInputElement;
    state.targetVolume = clamp(Number(input.value), 0, MAX_VOLUME);
    rampVolume(state.targetVolume, 700);
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

audio.addEventListener("ended", () => {
  playNextTrack().catch(() => {
    state.isPlaying = false;
    render();
  });
});

audio.volume = state.targetVolume;
setAudioSource(getCurrentTrack());
render();
