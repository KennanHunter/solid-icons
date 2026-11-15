import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneSummarize(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M14 5H5v14h14v-9h-5V5zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" opacity=".3"/><path d="M8 7A1 1 0 1 0 8 9 1 1 0 1 0 8 7z"/><path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zm4 16H5V5h9v5h5v9z"/><path d="M8 11A1 1 0 1 0 8 13 1 1 0 1 0 8 11z"/><path d="M8 15A1 1 0 1 0 8 17 1 1 0 1 0 8 15z"/>',
      }}
    />
  );
}
