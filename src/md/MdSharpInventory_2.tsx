import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpInventory_2(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M2 2v6.7h1V22h18V8.7h1V2H2zm13 12H9v-2h6v2zm5-7H4V4h16v3z"/>',
      }}
    />
  );
}
