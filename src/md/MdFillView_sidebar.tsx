import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillView_sidebar(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z"/>',
      }}
    />
  );
}
