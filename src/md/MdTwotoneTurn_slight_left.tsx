import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneTurn_slight_left(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z"/>',
      }}
    />
  );
}
