import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillDownload(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>',
      }}
    />
  );
}
