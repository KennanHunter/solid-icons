import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdRoundRemove(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>',
      }}
    />
  );
}
