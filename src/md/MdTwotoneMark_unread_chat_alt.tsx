import type { JSX } from "solid-js";
import { IconBase, type IconProps } from "../IconBase";

export function MdTwotoneMark_unread_chat_alt(props: IconProps): JSX.Element {
  return (
    <IconBase
      {...props}
      data={{
        attrs: { viewBox: "0 0 24 24", fill: "currentColor" },
        body: '<path d="M4 17.17 5.17 16H20V7.9c-.32.06-.66.1-1 .1s-.68-.04-1-.1V8H6V6h9.03c-.44-.58-.77-1.26-.92-2H4v13.17zM6 9h12v2H6V9zm0 3h8v2H6v-2z" opacity=".3"/><path d="M19 0A3 3 0 1 0 19 6 3 3 0 1 0 19 0z"/><path d="M20 16H5.17L4 17.17V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V6.97c-.58.44-1.26.77-2 .92V16z"/><path d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1A5.013 5.013 0 0 1 15.03 6H6v2z"/>',
      }}
    />
  );
}
