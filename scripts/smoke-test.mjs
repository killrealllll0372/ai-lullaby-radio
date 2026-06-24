import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "package.json",
  "vite.config.ts",
  "tsconfig.json",
  "src/main.ts",
  "src/styles.css",
  "src/catalog.ts",
  "src/data/tracks.json",
  "docs/implementation-notes.md",
  "docs/audio-catalog.md",
];

const fail = (message) => {
  console.error(`smoke-test failed: ${message}`);
  process.exit(1);
};

for (const file of requiredFiles) {
  try {
    await access(path.join(root, file));
  } catch {
    fail(`missing ${file}`);
  }
}

const musicDir = path.join(root, "music");
const musicFiles = (await readdir(musicDir)).filter((file) => file.endsWith(".mp3")).sort();
const catalog = JSON.parse(await readFile(path.join(root, "src/data/tracks.json"), "utf8"));

if (musicFiles.length !== 18) {
  fail(`expected 18 local MP3 files, found ${musicFiles.length}`);
}

if (catalog.length !== musicFiles.length) {
  fail(`catalog has ${catalog.length} tracks, music folder has ${musicFiles.length}`);
}

const musicSet = new Set(musicFiles);
const orders = new Set();

for (const track of catalog) {
  if (!track.title || !track.filename || typeof track.duration !== "number") {
    fail(`invalid catalog entry for ${track.filename ?? "unknown track"}`);
  }

  if (!musicSet.has(track.filename)) {
    fail(`catalog references missing file ${track.filename}`);
  }

  if (orders.has(track.order)) {
    fail(`duplicate order ${track.order}`);
  }

  orders.add(track.order);
}

console.log("smoke-test ok: app files and 18-track catalog are present");
