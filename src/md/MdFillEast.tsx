import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillEast(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"/>',
      }}
    />
  );
}
