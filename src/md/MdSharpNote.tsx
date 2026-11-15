import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpNote(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z"/>',
      }}
    />
  );
}
