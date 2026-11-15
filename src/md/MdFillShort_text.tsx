import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillShort_text(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M4 9h16v2H4V9zm0 4h10v2H4v-2z"/>',
      }}
    />
  );
}
