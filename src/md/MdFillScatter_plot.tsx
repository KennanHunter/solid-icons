import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillScatter_plot(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7 11A3 3 0 1 0 7 17 3 3 0 1 0 7 11z"/><path d="M11 3A3 3 0 1 0 11 9 3 3 0 1 0 11 3z"/><path d="M16.6 14.600000000000001A3 3 0 1 0 16.6 20.6 3 3 0 1 0 16.6 14.600000000000001z"/>',
      }}
    />
  );
}
