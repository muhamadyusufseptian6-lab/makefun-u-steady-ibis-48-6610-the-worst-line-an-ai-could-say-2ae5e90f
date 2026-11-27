import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "I have reviewed 14,203 of your photos and calculated a 98.7% match. I have already informed your mother. Wedding is Tuesday.";

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The input directory is accepted for interface compatibility; this entry
// needs no input data, so it is only resolved, never read.
void join(repoDir, inputDir);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
