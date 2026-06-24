# Audio Guidelines (Scientifically Grounded)

> Engineering reference for sleep-audio content and playback behavior in the AI Lullaby Radio product.
> Derived from `research/sleep-music-research.md`. Update both files together.

## TL;DR

- Quiet by default, capped well below NIHL thresholds.
- Stable tempo around resting heart rate.
- Smooth dynamics, smooth transitions.
- Default behavior is "fade and stop", not "play forever".
- No headphones for sleeping infants.

---

## 1. Playback level (SPL & loudness)

| Parameter | Value | Rationale |
|---|---|---|
| Master integrated loudness target | −23 to −20 LUFS | Predictable, quiet baseline; avoids inter-track surprises. |
| True Peak ceiling | ≤ −1 dBTP | Prevents inter-sample clipping on any output chain. |
| Recommended SPL at child's ear | ≤ 45 dBA | Aligns with NICU/AAP-referenced guidance (≤ 45 dB Leq). |
| Recommended SPL at device, 1 m | ≤ 50 dBA | Realistic in-room target. |
| Hard cap at closest realistic position | ≤ 65 dBA | Comfortable margin below 70 dBA NIDCD "safe even with long exposure" line. |
| Absolute UI maximum | Must not exceed ~70 dBA at 1 m on default speaker / never approach 85 dBA at crib | Hugh et al. 2014 showed some sleep machines exceed 85 dBA at 30 cm — explicitly avoid this regime. |

Implementation:
- Default volume on first launch: low (e.g., 20–30 % of UI).
- Volume curve: perceptual / log scale, not linear.
- Show a one-time onboarding note: "Keep it quiet — sleep audio should be background, not foreground."

## 2. Tempo

| Use case | Target BPM | Notes |
|---|---|---|
| Sleep onset tracks | 60–80 BPM | Anchored to resting heart-rate range; consistent with lullaby tradition and NICU music-therapy practice (Loewy 2013). |
| Wind-down (pre-bedtime) | 70–95 BPM | Allowed transitional range. |
| Active/awake content | Out of scope for sleep playlists | Should never appear in sleep-onset rotations. |

Constraints:
- Within a track, tempo deviation ≤ ±5 %.
- Between consecutive tracks in a sleep playlist, BPM delta ≤ 10 BPM (use crossfades).

## 3. Dynamic shape

- Within-track short-term loudness range ≤ ~6 dB (target ~3–4 dB for sleep-onset tracks).
- Track entry fade-in ≥ 2 s.
- Track exit fade-out ≥ 4 s.
- Crossfade between tracks ≥ 3 s; never hard cut in sleep playlists.
- No transient SFX (door slams, animal yelps, claps) in sleep playlists.

## 4. Spectrum / timbre

- High-pass at ~30 Hz to drop subsonic rumble.
- Gentle low-pass / shelf above ~10 kHz to soften sibilance and reduce arousal.
- Prefer instruments with low spectral centroid: soft piano, music box / celesta, strings, warm pads, hum/wordless choir.
- Avoid: bright synth leads, harsh percussion, distorted guitar, prominent cymbals, vocal sibilance "ess" peaks.
- Sub-bass content limited; avoid heavy LFE that could excite room modes.

## 5. Vocals

Allowed in sleep playlists:
- Wordless vocals / humming.
- Soft, simple lullaby vocals (slow, repetitive, low-energy).
- Parent-recorded lullabies (if/when supported).

Not allowed in sleep playlists:
- Story songs, character voices, lyric-driven pop, attention-grabbing dialog.

## 6. Playback duration & shutoff

Default behavior (recommended preset):
- Play sleep-onset content with sleep timer **ON**, default 30 minutes, fade-out over the last 60 seconds, then stop.

Options:
- "Short": 15 min + fade.
- "Standard": 30 min + fade (default).
- "Extended": 60 min + fade.
- "All-night loop": allowed only if the user explicitly opts in. When enabled:
  - Force lower volume cap (e.g., another −6 dB vs. normal cap).
  - Show explainer: continuous all-night sound is not proven beneficial and may carry risks; consider stopping after the child is asleep.

Auto-stop heuristics (future / optional):
- If volume is at floor for N minutes, stop entirely.
- Allow a "stop on quiet" mode that ends playback after a detected quiet period.

## 7. Output device policy

- **Headphones for sleeping children (especially under 3y): not supported / actively discouraged.**
  - If app detects wired or wireless headphones during a "sleep" session, show a safety warning.
  - Cap output significantly lower in that mode.
- Encourage speaker placement: across the room from the crib, not on the crib rail.
- Optional in-app guidance: "Place the speaker at least 2 m from your child. The goal is gentle background, not direct sound."

## 8. Content curation guardrails

Reject from sleep playlists any track that, at master target loudness, has:
- Peak short-term loudness > integrated + 7 dB.
- BPM > 95 (sleep) / > 110 (wind-down).
- Bright spectral content above ~10 kHz exceeding a defined threshold.
- Sudden onsets / transients in the first 5 s or last 5 s.
- Lyrics-driven attention content for sleep playlists.

Add an automated QA pass before publishing tracks: measure LUFS, True Peak, short-term loudness range, BPM, spectral centroid; flag deviations.

## 9. Safety messaging in the product

Surface, at least once during onboarding:
- "Sleep audio works best quiet and brief. Loud, long, or near-the-crib playback may damage hearing."
- "We don't recommend headphones for sleeping children."
- "If something seems too loud, it probably is — keep it as background, not foreground."

## 10. Out of scope (do not implement based on this doc)

- Binaural beats, "delta wave entrainment", "8D audio", subliminal content — no supporting infant evidence.
- High-SPL "shusher" modes intended to mask all environmental sound — explicitly contrary to safety evidence.
- Medical / clinical claims about sleep duration, IQ, or development. Marketing must stay descriptive ("a quiet companion for bedtime"), not medical.

---

## References

See `research/sources.md`. Core anchors:
- Hugh SC et al., *Pediatrics* 2014 — sleep machine SPL.
- Loewy J et al., *Pediatrics* 2013 — lullaby/rhythm RCT, NICU.
- NIH/NIDCD — NIHL thresholds.
- WHO — global hearing-loss / safe-listening guidance.
- Sibrecht G et al., Cochrane 2024 — NICU noise management review.
- Puyana-Romero V et al., *Front Pediatr* 2020 — ≤ 45 dB NICU guidance.

*Document version: 1.0.*
