import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillArrow_back_ios(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>',
      }}
    />
  );
}
