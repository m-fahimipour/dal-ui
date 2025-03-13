import type { JSX, ReactNode } from "react";

import type { TBlockProps } from "../block/Block";

export interface IAccordionWrapperProps extends Omit<TBlockProps, "onChange"> {
  children: ReactNode;
  isExpanded?: boolean;
  defaultIsExpanded?: boolean;
  disabled?: boolean;
  onChange?(isExpanded: boolean): void;
}

declare const AccordionWrapper: (props: IAccordionWrapperProps) => JSX.Element;

export default AccordionWrapper;
