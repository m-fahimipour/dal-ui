import { useState } from "react";

import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";
import AccordionWrapper from "./AccordionWrapper";

function Accordion() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <AccordionWrapper
      isExpanded={isExpanded}
      onChange={(isExpanded) => setIsExpanded(isExpanded)}
    >
      <AccordionSummary />

      <AccordionDetails />
    </AccordionWrapper>
  );
}

export default Accordion;
