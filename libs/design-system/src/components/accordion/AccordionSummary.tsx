import { Button } from "../button";

function AccordionSummary({
  isExpanded,
  handlerExpanded,
}: {
  isExpanded?: boolean;
  handlerExpanded?(): void;
}) {
  return (
    <Button onClick={handlerExpanded}>
      click {isExpanded ? "true" : "false"}
    </Button>
  );
}

export default AccordionSummary;
