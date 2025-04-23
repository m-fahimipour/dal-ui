import type { ChangeEvent, JSX, MouseEvent } from "react";

import type { TTreeSelectItem } from "../../../types/components/tree-select/tree-select";
import { Block } from "../../block";
import { Checkbox } from "../../checkbox";
import { Typography } from "../../typography";

interface ITreeSelectItem {
  item: TTreeSelectItem;
  onChangeHandler(item: TTreeSelectItem): void;
}

export function TreeSelectItem({
  item,
  onChangeHandler,
}: ITreeSelectItem): JSX.Element {
  return (
    <Block
      className="flex items-center gap-2"
      {...item.itemProps?.wrapperProps}
    >
      <Checkbox
        isActiveIndeterminate
        size="cb-small"
        {...item.itemProps?.checkboxProps}
        checked={item.isChecked}
        disabled={item.isDisabled}
        {...(item.type === "accordion-item" && {
          isIndeterminate: item.isIndeterminate,
        })}
        onClick={(e: MouseEvent) => e.stopPropagation()}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();
          onChangeHandler(item);
        }}
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
