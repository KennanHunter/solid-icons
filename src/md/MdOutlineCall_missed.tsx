import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineCall_missed(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9L19.59 7z"/>',
      }}
    />
  );
}
