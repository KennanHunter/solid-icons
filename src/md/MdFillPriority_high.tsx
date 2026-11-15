import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillPriority_high(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 17A2 2 0 1 0 12 21 2 2 0 1 0 12 17z"/><path d="M10 3h4v12h-4z"/>',
      }}
    />
  );
}
