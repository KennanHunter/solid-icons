import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillPark(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z\"/>"}}
    />
  );
}
