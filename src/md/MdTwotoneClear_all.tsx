import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneClear_all(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"/>',
      }}
    />
  );
}
