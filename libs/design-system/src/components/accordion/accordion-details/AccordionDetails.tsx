import { twJoin } from "tailwind-merge";

import type { JSX } from "react";

import type { TAccordionDetailsProps } from "../../../types/components/accordion/accordion-details";
import { Block } from "../../block";
import { Collapse } from "../../collapse";
import { useAccordionContext } from "../context/AccordionContext";
import type { IValueAccordionContext } from "../context/type";

function AccordionDetails({
  children,
  ...rest
}: TAccordionDetailsProps): JSX.Element {
  const value: IValueAccordionContext = useAccordionContext();

  return (
    <Collapse isCollapsed={Boolean(!value.isExpanded)}>
      <Block
        {...rest}
        className={twJoin("Dui-AccordionDetails-root", rest.className)}
        role={rest.role || "region"}
      >
        {children}
      </Block>
    </Collapse>
  );
}

export default AccordionDetails;
