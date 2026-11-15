import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillHourglass_bottom(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"/>',
      }}
    />
  );
}
