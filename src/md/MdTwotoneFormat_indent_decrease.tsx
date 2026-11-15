import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneFormat_indent_decrease(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7 16V8l-4 4zm4-9h10v2H11zm0 4h10v2H11zm0 4h10v2H11zm-8 4h18v2H3zM3 3h18v2H3z"/>',
      }}
    />
  );
}
