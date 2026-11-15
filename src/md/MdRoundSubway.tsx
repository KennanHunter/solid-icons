import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdRoundSubway(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M8.5 15A1 1 0 1 0 8.5 17 1 1 0 1 0 8.5 15z"/><path d="M15.5 15A1 1 0 1 0 15.5 17 1 1 0 1 0 15.5 15z"/><path d="M7.01 9h10v5h-10zM17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06zm.2 12.7c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20h-1.67l-1.5-1.5h-2.66L9.17 20H7.5v-.38l1.15-1.16A2.979 2.979 0 0 1 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3v6.5z"/>',
      }}
    />
  );
}
