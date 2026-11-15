import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpView_carousel(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z"/>',
      }}
    />
  );
}
