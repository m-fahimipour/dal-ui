import { createElement } from "react";

import type { ITypography } from "../../types/components/typography/Typography";

function Typography({
  component = "span",
  children,
}: ITypography): JSX.Element {
  return createElement(component, {}, children);
}

export default Typography;
