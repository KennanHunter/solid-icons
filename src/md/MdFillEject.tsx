import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillEject(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/>',
      }}
    />
  );
}
