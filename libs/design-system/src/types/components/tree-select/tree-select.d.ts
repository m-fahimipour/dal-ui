import type { JSX, ReactElement } from "react";

import type { TAccordionDetailsProps } from "../accordion/accordion-details";
import type { IAccordionSummaryProps } from "../accordion/accordion-summary";
import type { IAccordionWrapperProps } from "../accordion/accordion-wrapper";
import type { TBlockProps } from "../block/Block";
import type { ICheckboxProps } from "../checkbox/Checkbox";
import type { TTypographyProps } from "../typography/Typography";

interface ITreeSelectItemBase {
  id: string | number;
  label: ReactElement | string;
  value: string;
  isChecked: boolean;
  isDisabled?: boolean;
  element?: ReactElement;
  hasParent?: boolean;
  itemProps?: {
    wrapperProps?: TBlockProps;
    typographyProps?: TTypographyProps;
    checkboxProps?: Omit<ICheckboxProps, "checked">;
  };
}

export interface ITreeSelectSimpleItem extends ITreeSelectItemBase {
  type: "simple-item";
}

export interface ITreeSelectAccordionItem extends ITreeSelectItemBase {
  type: "accordion-item";
  children?: (ITreeSelectAccordionItem | ITreeSelectSimpleItem)[];
  accordionProps?: {
    wrapperProps?: Omit<IAccordionWrapperProps, "children">;
    summaryProps?: Omit<IAccordionSummaryProps, "children">;
    detailsProps?: Omit<TAccordionDetailsProps, "children">;
  };
}

export interface ITreeSelectProps {
  items: (ITreeSelectSimpleItem | ITreeSelectAccordionItem)[];
  itemProps?: ITreeSelectItemBase["itemProps"];
  accordionProps?: ITreeSelectAccordionItem["accordionProps"];
}

declare const TreeSelect: (props: ITreeSelectProps) => JSX.Element;

export default TreeSelect;
