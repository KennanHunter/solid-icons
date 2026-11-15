import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneH_plus_mobiledata(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 11H6V7H4v10h2v-4h6v4h2V7h-2v4zm10 0h-2V9h-2v2h-2v2h2v2h2v-2h2v-2z"/>',
      }}
    />
  );
}
