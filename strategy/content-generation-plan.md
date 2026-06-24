# Content Generation Plan

## Goal

Expand the starter catalog from the current 18 local MP3 files into a larger approved sleep-radio catalog without sacrificing predictability, safety, or trust.

The plan is not to generate as many tracks as possible. The plan is to build a repeatable pipeline where every track has provenance, metadata, automated QA, human review, and a clear release decision.

## Catalog Expansion Strategy

Near-term target:

- Keep the current 18 tracks as the baseline MVP catalog.
- Resolve the earlier 20-track expectation by either adding the missing two files or correcting all planning references to 18.
- Expand to 40-60 approved tracks only after QA gates exist.

Medium-term target:

- Create separate modes for newborn-safe quiet, toddler bedtime, adult calm, and wind-down.
- Keep sleep-onset content stricter than wind-down content.
- Use metadata to sequence by low contrast: loudness, tempo, density, brightness, and mood.

## Track Requirements

Sleep-onset tracks should target:

- Integrated loudness around -23 to -20 LUFS.
- True peak no higher than -1 dBTP.
- Approximate tempo around 60-80 BPM.
- Stable tempo and minimal rhythmic drive.
- Smooth dynamics with no sudden loudness jumps.
- Soft timbre and limited bright high-frequency content.
- No sharp attacks, alarms, chimes, drops, or strong percussion.
- No lyric-driven or attention-grabbing vocals.
- Smooth intro and outro suitable for fades and crossfades.

Wind-down tracks may be slightly broader, but should still avoid high stimulation.

## Generation Inputs

Prompt families should be narrow and reusable:

- Soft piano and warm pad lullaby, 60-70 BPM, very quiet, no percussion.
- Music box and soft strings, slow repetitive motif, no bright bells, no sudden accents.
- Warm ambient cradle texture, low movement, no lead melody, no vocals.
- Wordless humming layer with soft pads, no lyrics, no sibilance, no dramatic changes.

Every generation batch should record:

- Prompt.
- Model or tool.
- Date.
- Seed or reproducibility data if available.
- Intended mode.
- Rights and usage terms.
- Reviewer.
- Final decision.

## Automated QA Pipeline

Before human review, run an automated analysis pass.

Required measurements:

- Duration.
- Integrated loudness.
- True peak.
- Short-term loudness range.
- Approximate BPM.
- Spectral centroid or brightness proxy.
- Transient density or onset strength.
- Silence, clipping, corruption, or decoding errors.

Initial rejection thresholds:

- BPM above 95 for sleep-onset mode.
- True peak above -1 dBTP before normalization.
- Short-term loudness spikes above the accepted range.
- Brightness or transient flags above threshold.
- Obvious decode errors, clipping, or abrupt start/end.

Flagged tracks can be reviewed manually, but they should not enter the sleep catalog by default.

## Human Listening Review

Each candidate track should receive a short structured review.

Scorecard:

- Too loud: yes/no.
- Too bright: yes/no.
- Too rhythmic: yes/no.
- Too emotionally dramatic: yes/no.
- Contains attention-grabbing event: yes/no.
- Smooth beginning and ending: yes/no.
- Suitable before sleep: yes/no.
- Suitable after child is likely asleep: yes/no.
- Reviewer notes.

Review on common playback setups:

- Phone speaker at low volume.
- Small room speaker across the room.
- Laptop speaker.

Do not use headphones as the main review target for infant sleep use.

## Sequencing Review

Track approval is not enough. The product also needs adjacent-track safety.

For each release batch:

- Sort tracks by mode, loudness, tempo, brightness, and density.
- Avoid placing a brighter or more rhythmic track late in a session.
- Test transitions manually.
- Prefer gentle fade-out/fade-in until crossfade quality can be validated.
- Keep a "do not follow" note for incompatible track pairs.

## Parent Feedback Loop

Collect feedback in terms parents can answer quickly:

- This track was too loud.
- This track was too bright.
- This track had too much rhythm.
- My child noticed the transition.
- This session worked well.
- I stopped it manually.

Connect feedback to:

- Track ID.
- Previous and next track.
- Timer length.
- Volume setting range.
- Session position.

Use this feedback to remove or demote tracks before generating more content.

## Release Process

Every catalog release should include:

1. Batch source and rights check.
2. Automated QA report.
3. Human listening scorecards.
4. Sequencing review.
5. Updated `tracks.json` metadata.
6. Smoke test confirming file and metadata consistency.
7. Short release note explaining what changed.

No generated track should skip the release process because the product depends on trust more than novelty.

## 7-Day Content Plan

- Create a spreadsheet or JSON schema for candidate metadata and review status.
- Manually review the current 18 tracks with the listening scorecard.
- Mark tracks as approved, needs review, or rejected for sleep mode.
- Define the first automated QA script requirements.
- Draft 10 reusable generation prompts.

## 30-Day Content Plan

- Run automated QA on the current catalog.
- Generate or source a small candidate batch of 20-30 tracks.
- Publish only the best 10-15 that pass all checks.
- Start collecting parent track-level feedback.
- Add sequencing metadata for loudness, tempo, brightness, and density.

## 90-Day Content Plan

- Reach 40-60 approved tracks across modes.
- Build a repeatable monthly batch pipeline.
- Add metadata-driven sequence generation.
- Use parent feedback to create a rejection and demotion policy.
- Consider personalized exclusions only after privacy and storage decisions are ready.
