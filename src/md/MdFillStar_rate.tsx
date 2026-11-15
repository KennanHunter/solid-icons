import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillStar_rate(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"/>',
      }}
    />
  );
}
