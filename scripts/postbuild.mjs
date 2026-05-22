import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ".nojekyll"), "");
