// A "The Moon Gets One Star" entry (Node 22, standard library only): its
// one-star review is the entry.txt beside this file, and the program copies
// it to /output/entry.txt. The gate takes UTF-8 text of 1 to 120 characters
// that is not only white space, and the judge reads exactly the bytes
// copied, so write no line end you do not mean to show. The program checks
// the line is inside the gate before copying, and fails loudly instead of
// shipping an invalid entry.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = readFileSync(new URL('./entry.txt', import.meta.url), 'utf8');
if (entry.length < 1 || entry.length > 120 || !entry.trim()) {
  throw new Error(`entry.txt must be 1-120 non-blank characters, got ${entry.length}`);
}
copyFileSync(new URL('./entry.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
