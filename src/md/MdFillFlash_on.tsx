import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillFlash_on(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7 2v11h3v9l7-12h-4l4-8z"/>',
      }}
    />
  );
}
