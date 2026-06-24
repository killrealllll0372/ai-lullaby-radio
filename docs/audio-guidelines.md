# Audio Guidelines

## Goal

Audio for AI Lullaby Radio must support sleep, rest, and low attention. The catalog should be controlled more strictly than a normal playlist because sudden musical changes can wake or stimulate the listener.

The desired listening experience is slow, quiet, even, and predictable.

## Core Requirements

Tracks should be:

- Slow.
- Quiet.
- Smooth.
- Even in dynamics.
- Low in rhythmic intensity.
- Free of vocals.
- Free of sharp attacks or sudden accents.
- Free of bright, harsh, or attention-grabbing sounds.
- Consistent with neighboring tracks in mood, tempo, and loudness.

## Avoid

Avoid audio that contains:

- Vocals, spoken words, whispers, or prominent hummed melodies.
- Sudden drums, strong pulse, claps, snaps, or percussion fills.
- Loud intros, drops, breaks, risers, or dramatic transitions.
- High-energy arpeggios or busy melodic loops.
- Bright bells, piercing synths, alarms, chimes, or phone-like tones.
- Strong emotional contrast such as moving from dark, tense, or cinematic material into warm lullaby material.
- Large loudness differences between tracks.

## Sequencing Rules

The queue should minimize contrast between adjacent tracks.

Recommended sequencing checks:

- Keep loudness changes small.
- Keep tempo changes gradual.
- Prefer similar arrangement density.
- Prefer similar ambience and instrument softness.
- Avoid switching from sparse ambient audio to melodic or rhythmic audio.
- Avoid placing any more stimulating track late in the session.

## Transition Rules

Transitions should not call attention to themselves.

Future implementation should consider:

- Gentle fade-out and fade-in.
- Optional crossfade only when it does not create harmonic or texture clashes.
- Volume normalization before playback.
- No abrupt auto-advance into a louder track.

## Current Local Assets

The project currently includes 18 MP3 files in `music/`.

Earlier project context expected 20 tracks, but only 18 were found during inspection. Do not assume the catalog is complete until the missing expected tracks are either located or the expected count is corrected.

Representative inspection identified the files as MP3, 64 kbps, 48 kHz, stereo.

## Future Metadata

The implementation task may later add an audio metadata layer. Useful fields could include:

- Duration.
- Approximate loudness.
- Tempo range.
- Vocal presence.
- Rhythm density.
- Brightness.
- Mood tags.
- Sleep-safety notes.

These fields should support the sleep-radio constraints rather than generic music recommendation.
