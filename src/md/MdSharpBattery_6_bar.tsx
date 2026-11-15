import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpBattery_6_bar(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M17 4v18H7V4h3V2h4v2h3zm-2 2H9v2h6V6z"/>',
      }}
    />
  );
}
