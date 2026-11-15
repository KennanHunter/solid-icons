import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneHorizontal_split(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"/><path d="M5 15h14v2H5z" opacity=".3"/>',
      }}
    />
  );
}
