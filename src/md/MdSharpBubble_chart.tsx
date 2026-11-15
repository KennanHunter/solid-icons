import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpBubble_chart(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7.2 11.2A3.2 3.2 0 1 0 7.2 17.6 3.2 3.2 0 1 0 7.2 11.2z"/><path d="M14.8 16A2 2 0 1 0 14.8 20 2 2 0 1 0 14.8 16z"/><path d="M15.2 4.000000000000001A4.8 4.8 0 1 0 15.2 13.600000000000001 4.8 4.8 0 1 0 15.2 4.000000000000001z"/>',
      }}
    />
  );
}
