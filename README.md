# AI Lullaby Radio

AI Lullaby Radio is a local sleep-radio MVP for calm, predictable bedtime listening.

The app is now implemented as a small frontend-only Vite/TypeScript site. It plays the local MP3 catalog from `music/`, shows the current and next track, supports play/pause, a next-track control, protected volume, and a sleep timer with a gentle fade-out before stopping.

The visible app UI is Russian-language, with calm wording and no medical or therapeutic claims.

## Why Frontend-Only

The current product only needs to serve bundled local audio files and static metadata. A backend would add moving parts without solving a current requirement. If the project later adds uploads, accounts, server-side audio analysis, or persistent multi-device preferences, a backend can be introduced then.

## Commands

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the lightweight smoke test:

```bash
npm run smoke-test
```

## Deployment

The production site is deployed to GitHub Pages:

```text
https://killrealllll0372.github.io/ai-lullaby-radio/
```

Deployment is handled by `.github/workflows/deploy-pages.yml` after pushes to `main`. See `docs/deployment.md` for details.

## Current Features

- Minimal mobile-first sleep-radio interface.
- Local playback of MP3 files from `music/`.
- Current track and next track display.
- Deterministic, controlled catalog order instead of high-contrast random shuffle.
- Play/pause and next-track controls.
- Sleep timer options: 10, 20, 30, 45, and 60 minutes.
- Fade-in on playback start and fade-out before timer stop.
- Volume control capped at a protected maximum to reduce sudden loudness jumps.
- Track metadata in `src/data/tracks.json`.

## Local Music Catalog

The local catalog is stored in:

```text
music/
```

The implemented metadata index references 18 MP3 files. Earlier project context expected 20 tracks, but only 18 are present locally, so the app uses the available files and documents the missing-count limitation.

See `docs/audio-catalog.md` for the track list and measured durations.

## Project Structure

```text
ai lyllaby radio/
  index.html
  package.json
  vite.config.ts
  tsconfig.json
  src/
    main.ts
    catalog.ts
    styles.css
    data/tracks.json
  scripts/
    smoke-test.mjs
  music/
    18 MP3 files
  docs/
```

## Documentation

- `docs/product-brief.md` describes the product direction and audience.
- `docs/architecture.md` records the implemented frontend-only architecture.
- `docs/audio-guidelines.md` defines sleep-safe audio requirements.
- `docs/audio-catalog.md` lists local tracks and durations.
- `docs/implementation-notes.md` captures implementation decisions and limitations.
- `docs/local-development.md` documents local commands.
- `docs/deployment.md` documents the GitHub Pages deployment.
