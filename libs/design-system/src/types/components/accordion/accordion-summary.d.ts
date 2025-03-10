import type { ReactNode } from "react";

import type { IButtonProps } from "../button/Button";
import type { ITypographyProps } from "../typography/Typography";

export interface IAccordionSummaryProps {
  children?: ReactNode;
  expandedIcon?: ReactNode;
  componentsProps?: {
    typography?: ITypographyProps;
    button?: IButtonProps;
    expandedIcon?: ITypographyProps;
  };
}

declare const AccordionSummary: (props: IAccordionSummaryProps) => JSX.Element;

export default AccordionSummary;
