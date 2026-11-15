import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillTornado(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zm11-5H5.05l1.74 3h10.42z"/>',
      }}
    />
  );
}
