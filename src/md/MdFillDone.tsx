import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillDone(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>',
      }}
    />
  );
}
