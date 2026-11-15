import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillDrag_handle(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>',
      }}
    />
  );
}
