import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneDirections_bus(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="m17.37 17 .29-.27c.13-.11.34-.36.34-.73v-4H6v4c0 .37.21.62.34.73l.29.27h10.74zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm5.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM12 4c-3.69 0-5.11.46-5.66.99h11.31C17.11 4.46 15.69 4 12 4z" opacity=".3"/><path d="M17 21h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1zM12 4c3.69 0 5.11.46 5.66.99H6.34C6.89 4.46 8.31 4 12 4zM6 6.99h12V10H6V6.99zM8 17H6.63l-.29-.27A.968.968 0 0 1 6 16v-4h12v4c0 .37-.21.62-.34.73l-.29.27H8z"/><path d="M8.5 13A1.5 1.5 0 1 0 8.5 16 1.5 1.5 0 1 0 8.5 13z"/><path d="M15.5 13A1.5 1.5 0 1 0 15.5 16 1.5 1.5 0 1 0 15.5 13z"/>',
      }}
    />
  );
}
