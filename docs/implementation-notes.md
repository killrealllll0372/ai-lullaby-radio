# Implementation Notes

## Scope

`TASK_03_IMPLEMENTATION_FRONTEND_BACKEND` implemented a local MVP for AI Lullaby Radio.

The implementation is intentionally frontend-only. The app plays local MP3 files, reads static metadata, and keeps state inside the browser. No backend is required for the current feature set.

## Stack

- Vite
- TypeScript
- Browser `Audio` element
- Static JSON metadata in `src/data/tracks.json`

## Implemented Features

- Mobile-first sleep-radio UI.
- Local playback from `music/`.
- Play and pause controls.
- Current track display.
- Next track display.
- Manual next-track control.
- Deterministic controlled order.
- Sleep timer for 10, 20, 30, 45, and 60 minutes.
- Fade-in on playback start.
- Fade-out before timer stop.
- Volume control capped at a protected maximum.
- Smooth volume ramps for manual volume changes.
- Persistence for current track index and volume through `localStorage`.
- Smoke test for app files and catalog consistency.

## Audio Catalog

The catalog metadata lives in `src/data/tracks.json`.

Each track has:

- `title`
- `filename`
- `duration`
- `order`
- `tags`

Durations were measured with `ffprobe`.

## Loudness And Normalization

The MVP does not calculate LUFS or perform offline normalization. As a practical first protection, playback volume is capped and changed gradually. Track starts fade in from silence, and timer shutdown fades out before stopping.

Future work can add an offline analysis step that measures integrated loudness, true peak, tempo, brightness, and rhythm density.

## Known Limitations

- Earlier project context expected 20 MP3 files, but only 18 are present in `music/`.
- The catalog uses manual/static metadata rather than automatic indexing.
- There is no crossfade between tracks yet.
- Loudness protection is programmatic volume ramping, not full audio normalization.
- There is no backend because the current MVP does not need one.
