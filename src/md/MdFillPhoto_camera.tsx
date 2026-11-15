import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillPhoto_camera(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M12 8.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 1 0 12 8.8z\"/><path d=\"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/>"}}
    />
  );
}
