import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillNotes(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z\"/>"}}
    />
  );
}
