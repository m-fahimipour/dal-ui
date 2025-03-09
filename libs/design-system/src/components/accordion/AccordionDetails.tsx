import { useRef } from "react";

import { twJoin } from "tailwind-merge";

import { Typography } from "../typography";

function AccordionDetails({ isExpanded }: { isExpanded?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null);
  console.log(ref);

  return (
    <Typography
      component="p"
      refComponent={ref}
      className={twJoin(
        "overflow-hidden transition-[height]",
        isExpanded ? "h-10" : "h-0",
      )}
    >
      details
    </Typography>
  );
}

export default AccordionDetails;
