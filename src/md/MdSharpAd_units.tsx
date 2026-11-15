import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpAd_units(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z"/><path d="M8 6h8v2H8z"/>',
      }}
    />
  );
}
