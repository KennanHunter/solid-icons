import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpCall_made(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>',
      }}
    />
  );
}
