import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillLast_page(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>',
      }}
    />
  );
}
