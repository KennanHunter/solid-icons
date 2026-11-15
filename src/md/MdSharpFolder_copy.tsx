import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpFolder_copy(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M3 6H1v15h19v-2H3z"/><path d="M23 4h-9l-2-2H5.01L5 17h18V4z"/>',
      }}
    />
  );
}
