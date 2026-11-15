import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpWidth_wide(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M22 4H2v16h20V4zM4 6h2v12H4V6zm16 12h-2V6h2v12z"/>',
      }}
    />
  );
}
