import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillLeaderboard(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>',
      }}
    />
  );
}
