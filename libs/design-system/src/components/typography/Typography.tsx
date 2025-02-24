import { createElement } from "react";

import { twJoin } from "tailwind-merge";

import type { ITypography } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
  variants,
  className,
  refComponent,
  ...rest
}: ITypography): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-typography-root", className, variants),
      ref: refComponent,
    },
    children,
  );
}

export default Typography;
