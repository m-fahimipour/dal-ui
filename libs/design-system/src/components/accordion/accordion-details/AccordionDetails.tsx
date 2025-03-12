import type { JSX } from "react";

import { Collapse } from "../../collapse";
import { useAccordionContext } from "../context/AccordionContext";
import type { IValueAccordionContext } from "../context/type";

function AccordionDetails(): JSX.Element {
  const value:IValueAccordionContext = useAccordionContext();

  return (
    <Collapse isCollapsed={Boolean(value.isExpanded)}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
      voluptatum amet voluptate quam, voluptatem eveniet ducimus eos. Quis
      perspiciatis magnam optio ratione impedit tempore expedita! Eveniet
      perferendis iusto voluptas similique.
    </Collapse>
  );
}

export default AccordionDetails;
