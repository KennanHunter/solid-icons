import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpFile_upload(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z"/>',
      }}
    />
  );
}
