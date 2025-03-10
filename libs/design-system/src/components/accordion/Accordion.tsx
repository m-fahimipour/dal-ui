import { useState, type ReactNode } from "react";

import AccordionDetails from "./AccordionDetails";
import AccordionSummary from "./AccordionSummary";
import AccordionWrapper from "./AccordionWrapper";

function Accordion({ i }: { i: ReactNode }) {
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <AccordionWrapper
    // isExpanded={isExpanded}
    // onChange={(isExpanded) => setIsExpanded(isExpanded)}
    >
      <AccordionSummary expandedIcon={i}>تست</AccordionSummary>

      <AccordionDetails />
    </AccordionWrapper>
  );
}

export default Accordion;
