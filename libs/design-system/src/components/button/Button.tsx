import { twMerge } from "tailwind-merge";

import type { IButtonProps } from "../../types/components/button/Button";
import RippleEffect from "./components/RippleEffect";

function Button({
  children,
  size = "btn-medium",
  variant = "btn-contained",
  hasRippleEffect = true,
  rippleProps,
  // isLoading,
  className,
  ...otherProps
}: IButtonProps): JSX.Element {
  return (
    <button
      {...otherProps}
      className={twMerge(
        "Dui-Button-root",
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-1",
        className,
        [variant, size],
      )}
    >
      {children}

      {hasRippleEffect && (
        <RippleEffect
          {...(variant != "btn-contained" && {
            bgColor: "bg-primary-7 dark:bg-secondary-7",
          })}
          {...rippleProps}
        />
      )}
    </button>
  );
}

export default Button;
