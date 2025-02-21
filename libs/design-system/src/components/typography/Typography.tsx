import { createElement } from "react";

import { twJoin } from "tailwind-merge";

import type { ITypography } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
  variants,
  className,
  ...rest
}: ITypography): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dalui-typography-root", className, variants),
    },
    children
  );
}

export default Typography;
