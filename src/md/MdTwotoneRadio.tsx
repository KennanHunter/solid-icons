import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneRadio(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M20 13H4v7h16v-7zM8 18.98a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" opacity=".3"/><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12zM4 8h16v3h-2V9h-2v2H4V8zm0 5h16v7H4v-7z"/><path d="M8 13.98A2.5 2.5 0 1 0 8 18.98 2.5 2.5 0 1 0 8 13.98z"/>',
      }}
    />
  );
}
