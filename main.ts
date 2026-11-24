// Seventeen syllables of debugging — a 5-7-5 haiku.
// Writes the haiku to /output/entry.txt (no trailing newline) and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The three lines, in order. Syllables: 5 — 7 — 5.
const LINE_ONE = "Cursor blinks at three"; // 5
const LINE_TWO = "a.m., screenlight on my face"; // 7
const LINE_THREE = "I changed not one thing"; // 5

const OUTPUT_PATH = "/output/entry.txt";

function buildEntry(): string {
  const lines = [LINE_ONE, LINE_TWO, LINE_THREE];
  const text = lines.join("\n");
  if (lines.length !== 3 || text.endsWith("\n")) {
    throw new Error("entry must be exactly three lines with no trailing newline");
  }
  return text;
}

const entry = buildEntry();
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
console.log(entry);
