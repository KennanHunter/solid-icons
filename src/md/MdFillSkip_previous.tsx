import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillSkip_previous(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>',
      }}
    />
  );
}
