import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineChange_history(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 7.77 18.39 18H5.61L12 7.77M12 4 2 20h20L12 4z"/>',
      }}
    />
  );
}
