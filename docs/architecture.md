# Architecture

## Implemented Architecture

AI Lullaby Radio is implemented as a frontend-only Vite/TypeScript application.

```text
music/*.mp3
  -> src/data/tracks.json
  -> src/catalog.ts
  -> src/main.ts player state and sequencing
  -> browser Audio element
```

There is no backend in the current MVP. The local MP3 files are static assets, and the browser can play them directly. `vite.config.ts` sets `publicDir: "music"`, so Vite serves the files from the existing `music/` directory in development and copies them into the production build.

## Backend Decision

A backend is objectively not needed for the current scope because:

- There are no uploads, accounts, databases, or remote sessions.
- Track metadata is static and lives in `src/data/tracks.json`.
- Playback state is local to the browser.
- Local audio files can be served by Vite as static assets.

A backend may become useful later for uploaded tracks, server-side loudness analysis, authenticated libraries, or syncing preferences across devices.

## Components

### Audio Catalog

`src/data/tracks.json` is the metadata source for the local catalog. Each entry contains:

- `title`
- `filename`
- `duration`
- `order`
- `tags`

`src/catalog.ts` sorts the catalog by `order` and creates browser-safe URLs for playback.

Current limitation: earlier context expected 20 MP3 files, but only 18 are present in `music/`. The app uses only the available local files.

### Sleep-Radio Sequencer

The MVP uses a deterministic controlled order. This is intentionally calmer than random shuffle because all transitions follow the curated catalog sequence and avoid sudden high-contrast jumps.

Future sequencing can add loudness, tempo, brightness, or stimulation metadata once those measurements exist.

### Player UI

`src/main.ts` renders a minimal mobile-first UI with:

- play/pause;
- current track;
- next track;
- next-track control;
- protected volume control;
- sleep timer options for 10, 20, 30, 45, and 60 minutes;
- fade-in on start and fade-out before timer stop.

The app uses one route and keeps player state in memory, with current index and volume persisted in `localStorage`.

### Loudness Protection

The MVP does not perform offline loudness normalization. Instead, it reduces risk of abrupt volume jumps by:

- capping volume at a protected maximum;
- starting playback at zero volume and fading in;
- ramping volume changes instead of jumping instantly;
- fading out before timer-driven stop.

## Commands

```bash
npm install
npm run dev
npm run build
npm run smoke-test
```
