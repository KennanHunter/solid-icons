import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdRoundPriority_high(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 17A2 2 0 1 0 12 21 2 2 0 1 0 12 17z"/><path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',
      }}
    />
  );
}
