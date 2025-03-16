import type { SyntheticEvent } from "react";

export interface IValueAccordionContext {
  disabled?: boolean;
  isExpanded?: boolean;
  handlerExpanded?(event: SyntheticEvent): void;
}
