import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillPlay_arrow(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M8 5v14l11-7z"/>',
      }}
    />
  );
}
