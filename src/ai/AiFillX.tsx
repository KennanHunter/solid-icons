import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function AiFillX(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 1024 1024","fill":"currentColor"},"body":"<g fill=\"currentColor\"><path d=\"M823.111 912H200.89C151.8 912 112 872.2 112 823.111V200.89c0-49.09 39.8-88.89 88.889-88.89H823.11c49.09 0 88.89 39.8 88.89 88.889V823.11c0 49.09-39.8 88.89-88.889 88.89\"/><path d=\"M740 735H596.942L286 291h143.058zm-126.012-37.651h56.96L412.013 328.65h-56.96z\"/><path d=\"M331.297 735 491 549.732 470.114 522 286 735zM521 460.387 541.213 489 715 289h-44.67z\"/></g>"}}
    />
  );
}
