import { type ReactNode } from "react";

import { AccordionWrapper, AccordionSummary, AccordionDetails } from ".";
import { Typography } from "../typography";

function Accordion({ i }: { i: ReactNode }) {
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <AccordionWrapper
    // isExpanded={isExpanded}
    // onChange={(isExpanded) => setIsExpanded(isExpanded)}
    >
      <AccordionSummary expandedIcon={i}>تست</AccordionSummary>

      <AccordionDetails className="bg-primary-1 px-10">
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          quisquam assumenda nulla ab libero est at nostrum? Quod quis similique
          voluptas ex aperiam totam reiciendis, consectetur, exercitationem
          eveniet aut iusto.
        </Typography>
      </AccordionDetails>
    </AccordionWrapper>
  );
}

export default Accordion;
