import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

export type IconProps = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

export type IconData = {
  attrs: JSX.SvgSVGAttributes<SVGSVGElement>;
  body: string;
};

export function IconBase(props: IconProps & { data: IconData }): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "title", "data", "color"]);
  const html = () =>
    local.title
      ? `${local.data.body}<title>${local.title}</title>`
      : local.data.body;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...local.data.attrs}
      width={local.size ?? "1em"}
      height={local.size ?? "1em"}
      fill={local.color ?? "currentColor"}
      style={{ overflow: "visible" }}
      {...rest}
      innerHTML={html()}
    />
  );
}
