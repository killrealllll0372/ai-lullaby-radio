# Local Development

## Requirements

Use a recent Node.js version that can run Vite and native ES modules.

## Install

```bash
npm install
```

## Development Server

```bash
npm run dev
```

The Vite dev server is configured for `127.0.0.1:5173`.

The visible app UI is Russian-language, while the local development commands remain unchanged.

The production GitHub Pages build uses Vite's `/ai-lullaby-radio/` base path. Local development still serves the app from `/`.

## Build

```bash
npm run build
```

The build runs TypeScript checks with `tsc --noEmit` and then creates a Vite production build.

## Smoke Test

```bash
npm run smoke-test
```

The smoke test verifies that the expected app files exist, the local `music/` folder contains 18 MP3 files, and `src/data/tracks.json` references the available local files.

## Music Assets

The local audio catalog remains in:

```text
music/
```

`vite.config.ts` uses this directory as Vite's `publicDir`, so the app can play these local files without copying them into a separate `public/` folder.

Known limitation: earlier context expected 20 tracks, but only 18 MP3 files are present locally. The implementation uses the 18 available files and does not assume missing assets exist.

## No Environment Variables

The MVP does not require API keys, backend URLs, databases, or environment variables.

## Production Deployment

Production is published through GitHub Pages:

```text
https://killrealllll0372.github.io/ai-lullaby-radio/
```

See `docs/deployment.md` for the workflow and deployment notes.
