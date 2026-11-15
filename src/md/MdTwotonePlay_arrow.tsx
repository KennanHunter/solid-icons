import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotonePlay_arrow(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/>',
      }}
    />
  );
}
