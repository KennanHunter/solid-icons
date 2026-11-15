import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpSmartphone(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 1v22h14V1H5zm12 18H7V5h10v14z"/>',
      }}
    />
  );
}
