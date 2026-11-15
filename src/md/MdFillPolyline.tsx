import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillPolyline(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z\"/>"}}
    />
  );
}
