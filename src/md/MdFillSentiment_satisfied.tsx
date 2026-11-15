import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdFillSentiment_satisfied(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M15.5 8A1.5 1.5 0 1 0 15.5 11 1.5 1.5 0 1 0 15.5 8z"/><path d="M8.5 8A1.5 1.5 0 1 0 8.5 11 1.5 1.5 0 1 0 8.5 8z"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15a5.49 5.49 0 0 0 5.95-.01c-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53z"/>',
      }}
    />
  );
}
