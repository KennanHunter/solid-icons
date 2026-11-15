import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function AiOutlineMobile(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 1024 1024", fill: "currentColor" },
        body: '<path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"/>',
      }}
    />
  );
}
