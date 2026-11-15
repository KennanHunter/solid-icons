import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharp30fps(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z"/>',
      }}
    />
  );
}
