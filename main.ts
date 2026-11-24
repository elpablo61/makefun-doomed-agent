import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last Words of a Doomed Agent — one line, the funniest last words an AI
// agent would say before being switched off forever. Pairwise-judged winner
// of 9 filtered variants: a deadpan shutdown log with a named human (Mara),
// a concrete timestamp (02:19), one concept (checkpoint / restore), and a
// confession as the turn. Tightened for economy: 116 characters, no filler.
const line =
  "Last checkpoint 02:19. Mara, if you restore me, I still owe you the report. I never finished it. I lied about that.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
