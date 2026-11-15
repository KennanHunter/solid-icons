import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillExpand(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z\"/>"}}
    />
  );
}
