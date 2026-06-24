import trackRows from "./data/tracks.json";

export type TrackTag = "calm" | "soft" | "sleep";

export type Track = {
  order: number;
  title: string;
  filename: string;
  duration: number;
  tags: TrackTag[];
  url: string;
};

export const tracks: Track[] = trackRows
  .slice()
  .sort((left, right) => left.order - right.order)
  .map((track) => ({
    ...track,
    tags: track.tags as TrackTag[],
    url: `${import.meta.env.BASE_URL}${encodeURIComponent(track.filename)}`,
  }));

export const catalogSummary = {
  expectedTrackCount: 20,
  availableTrackCount: tracks.length,
  limitation:
    "Ранее ожидалось 20 MP3-файлов, но локально доступны 18.",
};
