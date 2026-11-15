import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineVertical_align_bottom(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>',
      }}
    />
  );
}
