// node scripts/port.mjs <pack> <path-to-upstream-index.js>
// Example:
//   node scripts/port.mjs md node_modules/solid-icons/md/index.js
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const [pack, srcJs] = process.argv.slice(2);
if (!pack || !srcJs) {
  throw new Error("usage: port.mjs <pack> <path-to-upstream-index.js>");
}

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, `../src/${pack}`);
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const text = readFileSync(srcJs, "utf8");
const re =
  /export function (\w+)\(props\)\{return IconTemplate\((\{a:\{[^}]*\},c:'[^']*'\})/g;

let count = 0;
for (const m of text.matchAll(re)) {
  const [, name, data] = m;
  count++;
  const { a: attrs, c: body } = new Function(`return (${data});`)();
  const tsx = `import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function ${name}(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={${JSON.stringify({ attrs, body })}}
    />
  );
}
`;
  writeFileSync(resolve(outDir, `${name}.tsx`), tsx);
}

console.log(`${pack}: wrote ${count} icons`);
