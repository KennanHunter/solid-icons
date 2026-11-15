import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdRoundSettings_input_svideo(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M7.5 10A1.5 1.5 0 1 0 7.5 13 1.5 1.5 0 1 0 7.5 10z"/><path d="M16.5 10A1.5 1.5 0 1 0 16.5 13 1.5 1.5 0 1 0 16.5 10z"/><path d="M9 14.5A1.5 1.5 0 1 0 9 17.5 1.5 1.5 0 1 0 9 14.5z"/><path d="M15 14.5A1.5 1.5 0 1 0 15 17.5 1.5 1.5 0 1 0 15 14.5z"/><path d="M15 7.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 6 9 6.67 9 7.5S9.67 9 10.5 9h3c.83 0 1.5-.67 1.5-1.5z"/>',
      }}
    />
  );
}
