import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpDelete_outline(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"/>',
      }}
    />
  );
}
