import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillHexagon(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"/>',
      }}
    />
  );
}
