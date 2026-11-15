import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillSegment(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"/>',
      }}
    />
  );
}
