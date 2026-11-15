import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineBar_chart(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"/>',
      }}
    />
  );
}
