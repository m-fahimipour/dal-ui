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
  parentId?: string | number;
  element?: ReactElement;
  isIndeterminate?: boolean;
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
  children?: TTreeSelectItem[];
  accordionProps?: {
    wrapperProps?: Omit<IAccordionWrapperProps, "children">;
    summaryProps?: Omit<IAccordionSummaryProps, "children">;
    detailsProps?: Omit<TAccordionDetailsProps, "children">;
  };
}

export type TTreeSelectItem = ITreeSelectSimpleItem | ITreeSelectAccordionItem;

export declare class TreeNodeArray<T> extends Array<T> {
  static override from<T>(items: ArrayLike<T> | Iterable<T>): TreeNodeArray<T>;

  static updateChildrenCheckState(
    array: TreeNodeArray<TTreeSelectItem>,
    id: string | number,
    isChecked: boolean,
  ): void;

  static updateParentsCheckState(
    array: TreeNodeArray<TTreeSelectItem>,
    item: TTreeSelectItem,
  ): void;

  static updateIndeterminateState(
    array: TreeNodeArray<TTreeSelectItem>,
    item: TTreeSelectItem,
  ): void;

  findItem(id?: string | number): TTreeSelectItem | undefined;
}

export interface ITreeSelectProps {
  items: TreeNodeArray<TTreeSelectItem>;
  itemProps?: ITreeSelectItemBase["itemProps"];
  accordionProps?: ITreeSelectAccordionItem["accordionProps"];
  changeHandler?(items: ITreeSelectProps["items"]): unknown;
}

declare const TreeSelect: (props: ITreeSelectProps) => JSX.Element;

export default TreeSelect;
