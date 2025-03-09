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
      className={twJoin(
        "Dui-Checkbox-root",
        "relative overflow-hidden rounded-xs",
        size,
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

        <Block
          className={twJoin(
            "Dui-Icon-root",
            "absolute inset-[-2px] rounded-xs transition-colors",
            inputProps.disabled &&
              !inputProps.checked &&
              isIndeterminate &&
              "bg-disabled-2",
            !inputProps.checked &&
              isIndeterminate &&
              "bg-primary-main dark:bg-secondary-main",
            inputProps.disabled &&
              !isIndeterminate &&
              "peer-checked:bg-disabled-2",
            (!isIndeterminate || inputProps.checked) &&
              "peer-checked:bg-primary-main dark:peer-checked:bg-secondary-main",
          )}
        >
          {/* checked icon */}
          {checkedIcon ?? (
            <Block
              component="span"
              className={twJoin(
                "Dui-Checked-icon-root",
                "absolute top-[45%] left-1/2 h-[55%] w-[30%] -translate-1/2 scale-[1.7] rotate-45 border-r-2 border-b-2 border-white opacity-0 transition-all group-has-checked/icon:scale-[1] group-has-checked/icon:opacity-100",
              )}
            />
          )}

          {/* indeterminate icon */}
          {isActiveIndeterminate &&
            (indeterminateIcon ?? (
              <Block
                component="span"
                className={twJoin(
                  "Dui-Indeterminate-icon-root",
                  "absolute top-1/2 left-1/2 h-[8%] w-[45%] -translate-1/2 scale-[1.7] bg-white opacity-0 transition-all",
                  !inputProps.checked &&
                    isIndeterminate &&
                    "scale-[1] opacity-100",
                )}
              />
            ))}
        </Block>
      </Block>
    </Block>
  );
}

export default Checkbox;
