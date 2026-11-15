import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillRemove(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19 13H5v-2h14v2z"/>',
      }}
    />
  );
}
