import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpGarage(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M15 12A1 1 0 1 0 15 14 1 1 0 1 0 15 12z"/><path d="M9 12A1 1 0 1 0 9 14 1 1 0 1 0 9 12z"/><path d="m8.33 7.5-.66 2h8.66l-.66-2z"/><path d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z"/>',
      }}
    />
  );
}
