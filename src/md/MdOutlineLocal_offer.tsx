import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineLocal_offer(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01 4 11V4h7v-.01l9 9-7 7.02z"/><path d="M6.5 5A1.5 1.5 0 1 0 6.5 8 1.5 1.5 0 1 0 6.5 5z"/>',
      }}
    />
  );
}
