# Product Roadmap

## Positioning

AI Lullaby Radio is a controlled bedtime audio product, not a general music playlist. The promise is a predictable, quiet sleep-radio experience where every track, transition, volume behavior, and session length is constrained for low stimulation.

The strongest positioning line is: "a calm, controlled lullaby radio for bedtime routines." Avoid wording that claims to treat insomnia, improve child development, or guarantee longer sleep.

## Target Audience

Primary audience:

- Parents and caregivers of infants and young children who already use lullabies, white noise, or calm music during bedtime.
- Parents who distrust normal playlists because one loud, bright, or rhythmic track can wake a child.
- Adults who want low-stimulation sleep audio for themselves and value predictable sessions over discovery.

Early adopter profile:

- Has a repeatable evening routine.
- Uses streaming services but manually monitors the queue.
- Cares about safety, volume, and stopping audio after sleep onset.
- Is willing to give subjective feedback on whether a track feels too bright, loud, busy, or emotionally intense.

## Main Pain

Regular music products optimize for engagement, variety, and recommendation discovery. Bedtime audio needs the opposite: stable loudness, slow tempo, low rhythmic intensity, soft timbre, and no surprising transitions.

The core user pain is not "I need more lullabies." It is: "I need a queue I do not have to supervise at bedtime."

## Current MVP

The current local MVP is frontend-only and already supports:

- 18 local MP3 tracks in the starter catalog.
- Static metadata in `src/data/tracks.json`.
- Deterministic low-variance playback order.
- Play/pause and manual next-track control.
- Sleep timer presets for 10, 20, 30, 45, and 60 minutes.
- Fade-in on start and fade-out before timer stop.
- Protected volume cap and smooth manual volume ramps.
- Local persistence for current track index and volume.

MVP success should be judged by whether parents can run a quiet 20-45 minute bedtime session without checking the queue.

## Product Principles

- Predictability over discovery.
- Safety-first defaults over maximum user freedom.
- Session completion over infinite engagement.
- Honest claims over medical promises.
- Catalog quality over catalog size.

## Next Versions

### V0.2: Safer Playback And Catalog QA

- Add offline audio analysis for LUFS, true peak, approximate BPM, short-term loudness range, brightness, and transient flags.
- Add a catalog QA report generated from local audio files.
- Add crossfade between tracks where harmonic and texture contrast are acceptable.
- Add track rejection states: approved, needs review, rejected for sleep mode.
- Add onboarding copy about quiet playback, speaker placement, and sleep timers.

### V0.3: Parent Feedback Loop

- Add lightweight feedback after sessions: "too loud", "too bright", "too busy", "child noticed transition", "worked well".
- Add per-track and per-session notes stored locally first.
- Add exportable feedback summary for manual review.
- Introduce curated playlists: newborn-safe quiet, toddler bedtime, adult calm, wind-down.

### V0.4: Content Expansion

- Expand the catalog from 18 tracks to 40-60 approved tracks.
- Add generated tracks only after they pass automated QA and human listening review.
- Add metadata-driven sequencing rather than a fully static order.
- Add a release checklist for every new batch.

### V1.0: Public Validation Release

- Publish a polished web app with a conservative safety disclaimer.
- Add analytics for anonymous product metrics if privacy policy and consent are ready.
- Add a landing page, SEO content hub, and Habr launch article.
- Decide whether accounts, cloud sync, or backend are needed based on feedback volume.

## Success Metrics

Product behavior metrics:

- Percentage of sessions started with a sleep timer.
- Median session duration before manual stop.
- Percentage of sessions with no manual next-track skip.
- Skip rate per track.
- Volume setting distribution.
- Repeat usage over 7 days.

Quality metrics:

- Share of catalog passing automated audio QA.
- Number of tracks rejected for loudness, brightness, rhythm, or transient issues.
- Parent-reported "child noticed transition" rate.
- Parent-reported "too loud / too stimulating" rate.

Growth metrics:

- Landing page conversion to app start.
- SEO impressions and clicks for sleep-audio queries.
- Habr article reads, saves, comments, and referral sessions.
- Waitlist or feedback form completion rate.

## 7-Day Plan

- Freeze the current documented state: 18 MP3 files, frontend-only MVP, no backend.
- Create one public-facing positioning statement and one internal safety statement.
- Add a manual listening scorecard for every current track.
- Define the first automated audio QA schema.
- Draft landing page copy without medical claims.
- Prepare a short parent interview script.

## 30-Day Plan

- Implement or run offline catalog analysis for loudness, peak, BPM, and brightness.
- Review all 18 tracks with both automated and subjective checks.
- Add onboarding safety copy and speaker placement guidance.
- Run 5-10 parent feedback sessions.
- Publish a landing page and collect qualitative feedback.
- Draft the first Habr article about building controlled sleep radio safely.
- Decide whether to correct the expected 20-track context or add the missing two tracks.

## 90-Day Plan

- Expand to 40-60 approved tracks with batch-level QA.
- Add metadata-driven sequencing and crossfades.
- Test at least two positioning variants: parent safety-first vs. predictable bedtime routine.
- Build a repeatable content generation and review pipeline.
- Publish 6-10 SEO articles and 1-2 Habr posts.
- Decide on monetization experiment based on retention and parent trust signals.
