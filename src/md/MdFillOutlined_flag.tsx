import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillOutlined_flag(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>',
      }}
    />
  );
}
