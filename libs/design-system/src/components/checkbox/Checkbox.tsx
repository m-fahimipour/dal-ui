import { twJoin } from "tailwind-merge";

import type { ICheckboxProps } from "../../types/components/checkbox/Checkbox";
import { Block } from "../block";

function Checkbox({
  checkedIcon,
  isIndeterminate,
  indeterminateIcon,
  isActiveIndeterminate,
  size = "cb-small",
  ...inputProps
}: ICheckboxProps): JSX.Element {
  return (
    <Block
      component="div"
      role="label"
      className={twJoin(
        "Dui-Checkbox-root",
        "relative overflow-hidden rounded-xs",
        size
      )}
    >
      <Block
        className={twJoin(
          "group/icon absolute inset-0 rounded-xs border-2 transition-[border] has-checked:border-transparent",
          inputProps.disabled
            ? "border-disabled-2"
            : "border-surface-3 hover:border-surface-10",
        )}
      >
        <input
          {...inputProps}
          type="checkbox"
          className={twJoin(
            "peer absolute inset-[-2px] z-10 opacity-0",
            inputProps.disabled ? "cursor-auto" : "cursor-pointer",
          )}
        />

        {checkedIcon ?? (
          <Block
            className={twJoin(
              "Dui-Checkbox-Icon-root",
              "absolute inset-[-2px] rounded-xs transition-colors",
              "after:absolute after:top-[45%] after:left-1/2 after:h-[55%] after:w-[30%] after:-translate-1/2 after:scale-[1.7] after:rotate-45 after:border-r-2 after:border-b-2 after:border-white after:opacity-0 after:transition-all group-has-checked/icon:after:scale-[1] group-has-checked/icon:after:opacity-100",
              inputProps.disabled
                ? "peer-checked:bg-disabled-2"
                : "peer-checked:bg-primary-main dark:peer-checked:bg-secondary-main",
            )}
          />
        )}

        {isActiveIndeterminate && (indeterminateIcon ?? (
          <Block
            className={twJoin(
              "Dui-Indeterminate-Icon-root",
              "absolute inset-[-2px] rounded-xs transition-colors",
              "before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:opacity-0 before:h-[8%] before:w-[45%] before:transition-all before:bg-white after:scale-[1.7]",
              (!inputProps.checked && isIndeterminate) && "bg-primary-main dark:bg-secondary-main before:opacity-100 before:scale-[1]",
              inputProps.disabled
                && "peer-checked:bg-disabled-2"
            )}
          />
        ))}
      </Block>
    </Block>
  );
}

export default Checkbox;
