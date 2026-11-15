import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillVolume_mute(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7 9v6h4l5 5V4l-5 5H7z"/>',
      }}
    />
  );
}
