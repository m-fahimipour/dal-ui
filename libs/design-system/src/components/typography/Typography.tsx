import { createElement } from "react";

import { twJoin } from "tailwind-merge";

import type { ITypographyProps } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
  variant,
  className,
  duiCn,
  refComponent,
  ...rest
}: ITypographyProps): JSX.Element {
  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-Typography-root", duiCn, className, variant),
      ref: refComponent,
    },
    children,
  );
}

export default Typography;
