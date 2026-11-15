import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdRoundShower(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{"attrs":{"viewBox":"0 0 24 24","fill":"currentColor"},"body":"<path d=\"M8 16A1 1 0 1 0 8 18 1 1 0 1 0 8 16z\"/><path d=\"M12 16A1 1 0 1 0 12 18 1 1 0 1 0 12 16z\"/><path d=\"M16 16A1 1 0 1 0 16 18 1 1 0 1 0 16 16z\"/><path d=\"M13 5.08V4c0-.55-.45-1-1-1s-1 .45-1 1v1.08C7.61 5.57 5 8.47 5 12v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1c0-3.53-2.61-6.43-6-6.92z\"/><path d=\"M8 19A1 1 0 1 0 8 21 1 1 0 1 0 8 19z\"/><path d=\"M12 19A1 1 0 1 0 12 21 1 1 0 1 0 12 19z\"/><path d=\"M16 19A1 1 0 1 0 16 21 1 1 0 1 0 16 19z\"/>"}}
    />
  );
}
