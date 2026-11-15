import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillFestival(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M13 5.7V4h3l-1-1.49L16 1h-5v4.7L2 12v10h7v-5l3.03-2L15 17v5h7V12z"/>',
      }}
    />
  );
}
