import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineArrow_back_ios_new(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"/>',
      }}
    />
  );
}
