import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneAv_timer(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 21a9 9 0 0 0 0-18h-1v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9z"/><path d="M12 16A1 1 0 1 0 12 18 1 1 0 1 0 12 16z"/><path d="M17 11A1 1 0 1 0 17 13 1 1 0 1 0 17 11z"/><path d="M7 11A1 1 0 1 0 7 13 1 1 0 1 0 7 11z"/>',
      }}
    />
  );
}
