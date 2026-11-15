import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillWeekend(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3a2 2 0 1 0-4 0v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.52 2 2.81V14h12v-2.03c0-1.3.84-2.4 2-2.81V7c0-1.1-.9-2-2-2z"/>',
      }}
    />
  );
}
