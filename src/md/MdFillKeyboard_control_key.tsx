import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillKeyboard_control_key(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z"/>',
      }}
    />
  );
}
