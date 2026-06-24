# Product Brief

## Product Idea

AI Lullaby Radio is a controlled sleep-radio product: a calm continuous audio stream designed for bedtime and low-stimulation listening.

The product should feel closer to a predictable sleep environment than a normal music playlist. Its main job is to keep the listener in a stable, quiet state by reducing surprise in mood, tempo, rhythm, loudness, and timbre.

## Problem

Ordinary playlists and recommendation systems, including Yandex Music, are optimized for music discovery, engagement, and variety. That is useful during the day, but it can be harmful for sleep.

Common sleep-listening problems:

- A playlist can suddenly switch from soft ambient music to a brighter or more rhythmic track.
- Track loudness can vary enough to wake or alert the listener.
- Vocals, percussion, hooks, and emotional shifts can pull attention back to the music.
- Recommendation queues can optimize for novelty rather than bedtime consistency.
- Manual playlist curation takes effort and still does not guarantee smooth transitions.

## Why Controlled Sleep Radio

A controlled sleep-radio experience should constrain the queue before playback reaches the listener.

The system should favor:

- Slow tempo.
- Quiet loudness.
- Smooth dynamics.
- Minimal rhythmic stimulation.
- No vocals.
- Similar emotional tone between neighboring tracks.
- Gentle transitions that avoid abrupt contrast.

The goal is not to maximize musical variety. The goal is to maintain a safe, predictable bedtime atmosphere.

## Target Audience

Primary listeners:

- People who already use music, ambient tracks, or lullabies to fall asleep.
- People who are sensitive to sudden changes in audio while resting.
- Parents and caregivers who want soft background music for bedtime routines.
- Listeners who like streaming convenience but need a stricter sleep-focused catalog.

The product should be especially useful when a person wants a queue they do not need to monitor manually.

## Current Catalog

The current local starter catalog lives in:

```text
music/
```

Inspection found 18 MP3 files. Earlier context expected 20 tracks, but only 18 are present locally, so 18 is the documented current state.

The catalog is enough for early design and playback experiments, but it should not be treated as complete. Before production use, the missing expected tracks should either be added or the expected count should be corrected.

## Product Principles

- Predictability over discovery.
- Calm continuity over musical variety.
- Low stimulation over engagement.
- Honest local-state documentation over assumed assets.
- Clear audio constraints before adding recommendation logic.

## Non-Goals For The Current Documentation Task

This document does not define an implementation stack, generate code, select a model, or perform scientific sleep research. It only captures the current product direction and constraints for future implementation work.
