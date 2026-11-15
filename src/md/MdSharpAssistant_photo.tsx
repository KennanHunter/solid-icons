import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdSharpAssistant_photo(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>',
      }}
    />
  );
}
