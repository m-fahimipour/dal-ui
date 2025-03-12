import { type ReactNode } from "react";

import { AccordionWrapper, AccordionSummary, AccordionDetails } from ".";

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
