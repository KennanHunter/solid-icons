import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpVertical_shades(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z"/>',
      }}
    />
  );
}
