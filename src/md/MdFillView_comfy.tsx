import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillView_comfy(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z"/>',
      }}
    />
  );
}
