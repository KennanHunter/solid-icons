import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpBookmark_border(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19 3H5v18l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z"/>',
      }}
    />
  );
}
