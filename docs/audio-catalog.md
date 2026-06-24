# Audio Catalog

The local catalog contains 18 MP3 files in `music/`. Earlier project context expected 20 tracks, but only these 18 files are available locally.

Durations were measured with `ffprobe` and stored in `src/data/tracks.json`.

| Order | Title | Filename | Duration | Tags |
| --- | --- | --- | --- | --- |
| 1 | Cloud Cradle | `Cloud Cradle.mp3` | 3:08 | calm, soft, sleep |
| 2 | Cloud Cradle 1 | `Cloud Cradle_1.mp3` | 3:48 | calm, soft, sleep |
| 3 | Cotton Moon | `Cotton Moon.mp3` | 4:05 | calm, soft, sleep |
| 4 | Cotton Moon 1 | `Cotton Moon_1.mp3` | 3:50 | calm, soft, sleep |
| 5 | Little Bear Blanket | `Little Bear Blanket.mp3` | 3:19 | calm, soft, sleep |
| 6 | Little Bear Blanket 1 | `Little Bear Blanket_1.mp3` | 2:53 | calm, soft, sleep |
| 7 | Little Nesting Moon | `Little Nesting Moon.mp3` | 2:09 | calm, soft, sleep |
| 8 | Little Nesting Moon 1 | `Little Nesting Moon_1.mp3` | 2:10 | calm, soft, sleep |
| 9 | Moonmilk Lullaby | `Moonmilk Lullaby.mp3` | 2:28 | calm, soft, sleep |
| 10 | Moonmilk Lullaby 1 | `Moonmilk Lullaby_1.mp3` | 2:48 | calm, soft, sleep |
| 11 | Mossy Moon Rest | `Mossy Moon Rest.mp3` | 3:05 | calm, soft, sleep |
| 12 | Mossy Moon Rest 1 | `Mossy Moon Rest_1.mp3` | 4:00 | calm, soft, sleep |
| 13 | Mossy Window Light | `Mossy Window Light.mp3` | 2:05 | calm, soft, sleep |
| 14 | Mossy Window Light 1 | `Mossy Window Light_1.mp3` | 2:09 | calm, soft, sleep |
| 15 | Warm Cradle Room | `Warm Cradle Room.mp3` | 3:19 | calm, soft, sleep |
| 16 | Warm Cradle Room 1 | `Warm Cradle Room_1.mp3` | 3:19 | calm, soft, sleep |
| 17 | Warm Milk Moon | `Warm Milk Moon.mp3` | 2:55 | calm, soft, sleep |
| 18 | Warm Milk Moon 1 | `Warm Milk Moon_1.mp3` | 2:45 | calm, soft, sleep |

## Sequencing

The app currently uses this deterministic order as a controlled low-variance queue. This avoids abrupt random jumps while the project lacks measured loudness, tempo, and stimulation metadata.
