import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpNorth_west(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"/>',
      }}
    />
  );
}
