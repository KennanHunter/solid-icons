import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpLooks_one(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M21 3H3v18h18V3zm-7 14h-2V9h-2V7h4v10z"/>',
      }}
    />
  );
}
