import { createElement } from "react";

import { twJoin } from "tailwind-merge";

import type { ITypographyProps } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
  variants,
  className,
  refComponent,
  ...rest
}: ITypographyProps): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-Typography-root", className, variants),
      ref: refComponent,
    },
    children,
  );
}

export default Typography;
