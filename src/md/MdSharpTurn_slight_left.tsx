import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpTurn_slight_left(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z"/>',
      }}
    />
  );
}
