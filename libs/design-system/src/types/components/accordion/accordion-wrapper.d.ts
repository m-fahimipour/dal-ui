import type { JSX, ReactNode, SyntheticEvent } from "react";

import type { TBlockProps } from "../block/Block";

export interface IAccordionWrapperProps extends Omit<TBlockProps, "onChange"> {
  children: ReactNode;
  isExpanded?: boolean;
  defaultIsExpanded?: boolean;
  disabled?: boolean;
  onChange?(event: SyntheticEvent, isExpanded: boolean): void;
}

declare const AccordionWrapper: (props: IAccordionWrapperProps) => JSX.Element;

export default AccordionWrapper;
