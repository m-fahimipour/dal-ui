import type { JSX, ReactElement } from "react";

import type { ITreeSelectAccordionItem } from "../../../types/components/tree-select/tree-select";
import { Accordion } from "../../accordion";
import { TreeSelectItem } from "./TreeSelectItem";

export interface ITreeSelectAccordion {
  item: ITreeSelectAccordionItem & {
    details?: (ReactElement | undefined)[];
  };
  onChangeHandler(item: ITreeSelectAccordion["item"]): void;
}

export function TreeSelectAccordion({
  item,
  onChangeHandler,
}: ITreeSelectAccordion): JSX.Element {
  return (
    <Accordion
      details={({ details }) => details}
      item={item}
      componentsProps={{
        accordionWrapperProps: item.accordionProps?.wrapperProps,
        accordionDetailsProps: item.accordionProps?.detailsProps,
        accordionSummaryProps: item.accordionProps?.summaryProps,
      }}
      summary={(item) => (
        <TreeSelectItem
          item={{
            type: item.type,
            id: item.id,
            label: item.label,
            value: item.value,
            isChecked: item.isChecked,
            children: item.children,
            itemProps: item.itemProps,
          }}
          onChangeHandler={onChangeHandler}
        />
      )}
    />
  );
}
