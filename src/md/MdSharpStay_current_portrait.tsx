import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpStay_current_portrait(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19 1.01 5.01 1v22H19V1.01zM17 19H7V5h10v14z"/>',
      }}
    />
  );
}
