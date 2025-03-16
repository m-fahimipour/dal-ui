import type { JSX, ReactElement } from "react";

import type { ITreeSelectAccordionItem } from "../../../types/components/tree-select/tree-select";
import { Accordion } from "../../accordion";
import { TreeSelectItem } from "./TreeSelectItem";

export interface ITreeSelectAccordion {
  item: ITreeSelectAccordionItem & {
    details?: (ReactElement | undefined)[];
  };
}

export function TreeSelectAccordion({
  item,
}: ITreeSelectAccordion): JSX.Element {
  return (
    <Accordion
      details={({ details }) => details}
      item={item}
      componentsProps={{
        accordionWrapperProps: item.accordionProps?.accordionWrapperProps,
        accordionDetailsProps: item.accordionProps?.accordionDetailsProps,
        accordionSummaryProps: item.accordionProps?.accordionSummaryProps,
      }}
      summary={(item) => (
        <TreeSelectItem
          item={{
            type: "item",
            id: item.id,
            label: item.label,
            value: item.value,
            isChecked: item.isChecked,
            children: item.children,
            itemProps: item.itemProps,
          }}
        />
      )}
    />
  );
}
