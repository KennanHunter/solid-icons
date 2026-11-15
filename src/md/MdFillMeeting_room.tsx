import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillMeeting_room(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"/>',
      }}
    />
  );
}
