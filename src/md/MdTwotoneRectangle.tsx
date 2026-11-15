import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneRectangle(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M4 6h16v12H4z" opacity=".3"/><path d="M2 4v16h20V4H2zm18 14H4V6h16v12z"/>',
      }}
    />
  );
}
