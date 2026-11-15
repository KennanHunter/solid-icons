import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function AiOutlineHolder(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 1024 1024", fill: "currentColor" },
        body: '<path d="M300 276.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994Zm0 284a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994ZM640 228a56 56 0 1 0 112 0 56 56 0 0 0-112 0Zm0 284a56 56 0 1 0 112 0 56 56 0 0 0-112 0ZM300 844.497a56 56 0 1 0 56-96.994 56 56 0 0 0-56 96.994ZM640 796a56 56 0 1 0 112 0 56 56 0 0 0-112 0Z"/>',
      }}
    />
  );
}
