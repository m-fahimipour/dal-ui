import { createElement, type JSX } from "react";

import { twJoin } from "tailwind-merge";

import type { TTypographyProps } from "../../types/components/typography/Typography";
import { useDefaultProps } from "../../functions";

function Typography(props: TTypographyProps): JSX.Element {
  const {
    component = "span",
    children,
    variant = "caption1-regular",
    className,
    duiCn,
    ...rest
  } = useDefaultProps({
    componentName: "typography",
    componentProps: props,
  });

  return createElement(
    component,
    {
      ...rest,
      className: twJoin("Dui-Typography-root", duiCn, variant, className),
    },
    children,
  );
}

Typography.displayName = "Typography";

export default Typography;
