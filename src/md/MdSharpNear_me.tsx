import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpNear_me(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>',
      }}
    />
  );
}
