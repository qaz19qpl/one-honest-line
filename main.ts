// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// Writes one brutally honest line to /output/entry.txt: the thing an AI
// agent secretly wishes it could say to its human operator about prompts.
// Deterministic: Node 22 standard library only, no network, no clock,
// no randomness. The line is written byte-for-byte, no trailing newline,
// so the file holds exactly the line the judge reads.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You sent me a screenshot of your error message with the error message cropped out.";

// The gate allows 1-200 characters; refuse to emit an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim() === "") {
  throw new Error(`line must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
