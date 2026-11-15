import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpScreen_search_desktop(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M1 19h22v2H1zM22 3H2v15h19.99L22 3zm-6.53 12.03-2.09-2.09c-1.35.87-3.17.71-4.36-.47-1.37-1.37-1.37-3.58 0-4.95s3.58-1.37 4.95 0c1.18 1.18 1.34 3 .47 4.36l2.09 2.09-1.06 1.06z"/><path d="M11.5 8A2 2 0 1 0 11.5 12 2 2 0 1 0 11.5 8z"/>',
      }}
    />
  );
}
