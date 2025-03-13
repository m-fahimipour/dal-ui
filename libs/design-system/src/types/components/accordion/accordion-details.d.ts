import type { JSX } from "react";

import type { TBlockProps } from "../block/Block";

export type TAccordionDetailsProps = {} & TBlockProps;

declare const AccordionDetails: (props: TAccordionDetailsProps) => JSX.Element;

export default AccordionDetails;
