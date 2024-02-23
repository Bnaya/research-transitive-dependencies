// @ts-check
import { readdir, unlink } from "node:fs/promises";
import { resolve } from "path";
console.info('Running post install');

const dtsFiles = await readdir("node_modules", { recursive: true });

for (const file of dtsFiles) {
  if (file.match(/.*\.d\.[mc]?ts$/)) {
    await unlink(resolve("node_modules", file));
  }
}

console.info('Post install done');
