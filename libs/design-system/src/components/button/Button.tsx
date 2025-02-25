import { twMerge } from "tailwind-merge";

import type { IButtonProps } from "../../types/components/button/Button";
import RippleEffect from "./components/RippleEffect";

function Button({
  children,
  className,
  size = "btn-medium",
  variant = "btn-contained",
  startIcon,
  endIcon,
  hasRippleEffect = true,
  rippleProps,
  ...otherProps
}: IButtonProps): JSX.Element {
  return (
    <button
      {...otherProps}
      className={twMerge(
        "Dui-Button-root",
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-1",
        startIcon || endIcon ? "gap-2" : "",
        className,
        [variant, size],
      )}
    >
      {startIcon}

      {children}

      {endIcon}

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
