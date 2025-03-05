import { twJoin } from "tailwind-merge";

import type { ICheckboxProps } from "../../types/components/checkbox/Checkbox";
import { Block } from "../block";

function Checkbox({
  iconComponent,
  ...inputProps
}: ICheckboxProps): JSX.Element {
  return (
    <Block
      component="div"
      role="label"
      className={twJoin(
        "Dui-Checkbox-root",
        "relative h-[18px] w-[18px] overflow-hidden rounded-xs",
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

        {iconComponent ?? (
          <Block
            className={twJoin(
              "Dui-Checkbox-Icon-root",
              "absolute inset-[-2px] rounded-xs transition-colors",
              "after:absolute after:top-[45%] after:left-1/2 after:h-[55%] after:w-[30%] after:-translate-1/2 after:scale-[1.7] after:rotate-45 after:border-r-2 after:border-b-2 after:border-white after:opacity-0 after:transition-all group-has-checked/icon:after:scale-[1] group-has-checked/icon:after:opacity-100",
              inputProps.disabled
                ? "group-has-checked/icon:bg-disabled-2"
                : "peer-checked:bg-primary-main dark:peer-checked:bg-secondary-main",
            )}
          />
        )}
      </Block>
    </Block>
  );
}

export default Checkbox;
