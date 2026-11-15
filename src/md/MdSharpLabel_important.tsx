import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpLabel_important(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z"/>',
      }}
    />
  );
}
