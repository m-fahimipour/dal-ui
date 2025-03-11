import { createElement, type JSX } from "react";

import { twJoin } from "tailwind-merge";

import type { TTypographyProps } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
  variant,
  className,
  duiCn,
  ...rest
}: TTypographyProps): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-Typography-root", duiCn, className, variant),
    },
    children,
  );
}

export default Typography;
