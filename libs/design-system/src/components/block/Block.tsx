import { createElement, type JSX } from "react";

import { twJoin } from "tailwind-merge";

import type { TBlockProps } from "../../types/components/block/Block";

function Block({
  children,
  component = "div",
  className,
  duiCn,
  ...rest
}: TBlockProps): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-Block-root", duiCn, className),
    },
    children,
  );
}

export default Block;
