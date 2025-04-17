import type { JSX, MouseEvent } from "react";

import type {
  ITreeSelectAccordionItem,
  ITreeSelectSimpleItem,
} from "../../../types/components/tree-select/tree-select";
import { Block } from "../../block";
import { Checkbox } from "../../checkbox";
import { Typography } from "../../typography";

interface ITreeSelectItem {
  item: ITreeSelectSimpleItem | ITreeSelectAccordionItem;
}

export function TreeSelectItem({ item }: ITreeSelectItem): JSX.Element {
  return (
    <Block
      className="flex items-center gap-2"
      {...item.itemProps?.wrapperProps}
    >
      <Checkbox
        size="cb-small"
        onClick={(e: MouseEvent) => e.stopPropagation()}
        {...item.itemProps?.checkboxProps}
        isActiveIndeterminate
        checked={item.isChecked}
        {...(item.type === "accordion-item" && {
          isIndeterminate: !item.isChecked
            ? item.children?.some(
                (child: ITreeSelectItem["item"]) => child.isChecked,
              )
            : false,
        })}
      />

      {typeof item.label == "string" ? (
        <Typography {...item.itemProps?.typographyProps}>
          {item.label}
        </Typography>
      ) : (
        item.label
      )}
    </Block>
  );
}
