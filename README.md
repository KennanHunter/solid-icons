# solid-icons (source-only TSX fork)

A trimmed, build-free fork of [`solid-icons`](https://github.com/x64Bits/solid-icons) that ships **plain TSX source**. Consume via a git dependency — your Vite + `vite-plugin-solid` pipeline transforms the files on the fly.

## Why

Upstream ships precompiled `.jsx`. Vite 8's SSR dep-optimizer prebundles those with esbuild's default (React) JSX transform, injecting `import { jsx } from "react/jsx-runtime"` — which crashes on the Cloudflare Workers runtime. Shipping TSX sidesteps the whole prebundle path.

## What's in the box

- `solid-icons/md` — Material Design
- `solid-icons/ai` — Ant Design

No other packs. Add one when you need it.

## Usage

```json
{
  "dependencies": {
    "solid-icons": "github:KennanHunter/solid-icons#<sha>"
  }
}
```

```tsx
import { MdFillLight_mode } from "solid-icons/md";
import { AiOutlineInfoCircle } from "solid-icons/ai";
```

Pin to a SHA; branches move. Icon names are whatever the port script produced — grep `src/md/` or `src/ai/` to find them.

### Vite config

Keep Vite from prebundling this package so TSX reaches `vite-plugin-solid`:

```ts
optimizeDeps: {
  exclude: ["solid-icons", "solid-icons/md", "solid-icons/ai"],
},
ssr: {
  noExternal: ["solid-icons"],
},
environments: {
  ssr: {
    optimizeDeps: {
      exclude: ["solid-icons", "solid-icons/md", "solid-icons/ai"],
    },
  },
},
```

## Layout

```
LICENSE
package.json      # no main, no types, no build, no prepare
scripts/port.mjs  # regenerates src/<pack>/ from an upstream build
src/
  IconBase.tsx
  md/ { index.ts, *.tsx }
  ai/ { index.ts, *.tsx }
```

No build step. No `dist/`.

## Adding a pack

```bash
npm install --no-save solid-icons@latest
node scripts/port.mjs <pack> node_modules/solid-icons/<pack>/index.js
```

Then add an `exports` entry in `package.json`:

```json
"./<pack>": {
  "solid": "./src/<pack>/index.ts",
  "default": "./src/<pack>/index.ts"
}
```

Commit, push, repin the SHA in the consumer. Don't hand-edit ported files — the script owns them.

## License

MIT, inherited from upstream. See [`LICENSE`](./LICENSE).
