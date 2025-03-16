import type { JSX, ReactNode, SyntheticEvent } from "react";

import type { TAccordionDetailsProps } from "./accordion-details";
import type { IAccordionSummaryProps } from "./accordion-summary";
import type { IAccordionWrapperProps } from "./accordion-wrapper";

interface IDefaultItemProperty {
  id: string | number;
}

export interface IAccordionProps<T extends IDefaultItemProperty> {
  item: T;
  expandedId?: IDefaultItemProperty["id"];
  disabled?: boolean;
  handlerExpanded?(
    event: SyntheticEvent,
    id: IDefaultItemProperty["id"],
    isExpanded: boolean,
  ): void;
  summary?: (item: T) => ReactNode;
  details?(item: T): ReactNode;
  componentsProps?: {
    accordionWrapperProps?: Omit<IAccordionWrapperProps, "children">;
    accordionSummaryProps?: Omit<IAccordionSummaryProps, "children">;
    accordionDetailsProps?: Omit<TAccordionDetailsProps, "children">;
  };
}

declare const Accordion: <T extends IDefaultItemProperty>(
  props: IAccordionProps<T>,
) => JSX.Element;

export default Accordion;
