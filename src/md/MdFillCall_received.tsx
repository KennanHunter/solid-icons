import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillCall_received(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>',
      }}
    />
  );
}
