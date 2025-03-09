import type { ReactNode } from "react";

import type { IBlockProps } from "../block/Block";

export interface IAccordionWrapperProps extends Omit<IBlockProps, "onChange"> {
  children: ReactNode;
  isExpanded?: boolean;
  defaultIsExpanded?: boolean;
  disabled?: boolean;
  onChange?(isExpanded: boolean): void;
}
