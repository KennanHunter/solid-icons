import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpMan_2(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M16 7H8v8h2.5v7h3v-7H16z"/><path d="M12 2A2 2 0 1 0 12 6 2 2 0 1 0 12 2z"/>',
      }}
    />
  );
}
