import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillStraight(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M11 6.83 9.41 8.41 8 7l4-4 4 4-1.41 1.41L13 6.83V21h-2z\"/>"}}
    />
  );
}
