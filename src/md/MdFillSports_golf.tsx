import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillSports_golf(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7 3.13 7 7 7zm0-12c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/><path d="M10 7A1 1 0 1 0 10 9 1 1 0 1 0 10 7z"/><path d="M14 7A1 1 0 1 0 14 9 1 1 0 1 0 14 7z"/><path d="M12 5A1 1 0 1 0 12 7 1 1 0 1 0 12 5z"/><path d="M7 19h2c1.1 0 2 .9 2 2v1h2v-1c0-1.1.9-2 2-2h2v-2H7v2z"/>',
      }}
    />
  );
}
