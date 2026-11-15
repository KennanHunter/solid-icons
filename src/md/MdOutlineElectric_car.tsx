import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdOutlineElectric_car(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.85 3h10.29l1.08 3.11H5.77L6.85 3zM19 13H5V8h14v5z"/><path d="M7.5 9A1.5 1.5 0 1 0 7.5 12 1.5 1.5 0 1 0 7.5 9z"/><path d="M16.5 9A1.5 1.5 0 1 0 16.5 12 1.5 1.5 0 1 0 16.5 9z"/><path d="M7 20h4v-2l6 3h-4v2z"/>',
      }}
    />
  );
}
