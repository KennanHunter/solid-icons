import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneRemember_me(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M7 20h10v1H7zm0-2.48V18h10v-.48c-1.47-.99-3.22-1.52-5-1.52s-3.53.53-5 1.52z" opacity=".3"/><path d="M12 9A1 1 0 1 0 12 11 1 1 0 1 0 12 9z" opacity=".3"/><path d="M7 3h10v1H7z" opacity=".3"/><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 20H7v-1h10v1zm0-3H7v-.48c1.47-.99 3.22-1.52 5-1.52s3.53.53 5 1.52V18zm0-2.79c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21zM17 4H7V3h10v1z"/><path d="M12 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>',
      }}
    />
  );
}
