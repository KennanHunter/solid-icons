import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlinePending(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M7 10.5A1.5 1.5 0 1 0 7 13.5 1.5 1.5 0 1 0 7 10.5z"/><path d="M12 10.5A1.5 1.5 0 1 0 12 13.5 1.5 1.5 0 1 0 12 10.5z"/><path d="M17 10.5A1.5 1.5 0 1 0 17 13.5 1.5 1.5 0 1 0 17 10.5z"/>',
      }}
    />
  );
}
