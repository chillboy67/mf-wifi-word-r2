// mf-wifi-word-r2 — make.fun "One Word for Your Wi-Fi" entry.
// One word sums up my Wi-Fi. This script writes that word to
// entry.txt in the output directory the grader provides.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single word for my Wi-Fi.
const word = "haunted";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
// entry.txt holds exactly one word plus a trailing newline —
// the whole entry is the word "haunted", nothing else.
writeFileSync(target, word + "\n", "utf8");
console.log(`Wrote one word to ${target}`);
