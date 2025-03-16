import type { JSX } from "react";

import { AccordionWrapper, AccordionSummary, AccordionDetails } from ".";
import type { IAccordionProps } from "../../types/components/accordion/accordion";

function Accordion<T extends { id: number | string }>({
  item,
  expandedId,
  disabled,
  componentsProps,
  handlerExpanded,
  summary,
  details,
}: IAccordionProps<T>): JSX.Element {
  return (
    <AccordionWrapper
      {...componentsProps?.accordionWrapperProps}
      {...(typeof expandedId !== "undefined" && {
        isExpanded: expandedId === item.id,
      })}
      disabled={disabled}
      onChange={(e, isExpanded) => handlerExpanded?.(e, item.id, isExpanded)}
    >
      <AccordionSummary {...componentsProps?.accordionSummaryProps}>
        {summary?.(item)}
      </AccordionSummary>

      <AccordionDetails {...componentsProps?.accordionDetailsProps}>
        {details?.(item)}
      </AccordionDetails>
    </AccordionWrapper>
  );
}

export default Accordion;
