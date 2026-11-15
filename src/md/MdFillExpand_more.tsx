import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillExpand_more(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/>',
      }}
    />
  );
}
