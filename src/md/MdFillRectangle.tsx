import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillRectangle(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M2 4h20v16H2z"/>',
      }}
    />
  );
}
