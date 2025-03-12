import type { ReactNode, JSX } from "react";

import type { TButtonProps } from "../button/Button";
import type { TTypographyProps } from "../typography/Typography";

export interface IAccordionSummaryProps {
  children?: ReactNode;
  expandedIcon?: ReactNode;
  componentsProps?: {
    typography?: TTypographyProps;
    button?: TButtonProps;
    expandedIcon?: TTypographyProps;
  };
}

declare const AccordionSummary: (props: IAccordionSummaryProps) => JSX.Element;

export default AccordionSummary;
