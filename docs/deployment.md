# Deployment

## Platform

The production deployment target is GitHub Pages.

- Repository: `https://github.com/killrealllll0372/ai-lullaby-radio`
- Production URL: `https://killrealllll0372.github.io/ai-lullaby-radio/`
- Deploy workflow: `.github/workflows/deploy-pages.yml`

## Build Path

The site is a frontend-only Vite/TypeScript app. GitHub Actions installs dependencies with `npm ci`, runs `npm run build`, runs `npm run smoke-test`, uploads `dist/` as a Pages artifact, and deploys that artifact through GitHub Pages.

`vite.config.ts` sets:

```ts
base: "/ai-lullaby-radio/"
```

This is required because the site is published as a GitHub Pages project site rather than at the root of `github.io`.

## Static Audio Assets

The `music/` directory remains Vite's `publicDir`. Production audio URLs are resolved with `import.meta.env.BASE_URL`, so MP3 files are requested under `/ai-lullaby-radio/` on GitHub Pages and under `/` in local development.

## Deployment Commands

```bash
npm run build
npm run smoke-test
git push -u origin main
```

After push, the `Deploy GitHub Pages` workflow publishes the site.

## Known Limitations

- The public deployment includes local MP3 files from `music/`; rights to those files should be confirmed before sharing the URL widely.
- GitHub Pages may take a short time to serve the first successful Actions deployment after repository creation.
