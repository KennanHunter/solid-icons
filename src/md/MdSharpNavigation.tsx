import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpNavigation(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>',
      }}
    />
  );
}
