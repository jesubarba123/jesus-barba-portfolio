import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const command = process.argv[2] === "dev" ? "dev" : "build";
const wasmDir = join(process.cwd(), "node_modules", "@next", "swc-wasm-nodejs");
const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

const env = { ...process.env };

if (existsSync(join(wasmDir, "wasm.js"))) {
  env.NEXT_TEST_WASM_DIR = wasmDir;
}

const child = spawn(process.execPath, [nextBin, command, "--webpack"], {
  stdio: "inherit",
  env
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  if (command === "build" && code === 0) {
    const outDir = join(process.cwd(), "out");
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, ".nojekyll"), "");
  }

  process.exit(code ?? 0);
});
