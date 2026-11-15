import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpLabel(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z"/>',
      }}
    />
  );
}
