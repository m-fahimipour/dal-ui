import { twJoin, twMerge } from "tailwind-merge";

import type { IButtonProps } from "../../types/components/button/Button";
import { Dot1 } from "./components/loading/dot/dot-1/Dot1";
import { Spinner1 } from "./components/loading/spinner/spinner-1/Spinner1";
import RippleEffect from "./components/RippleEffect";

function Button({
  children,
  className,
  size = "btn-medium",
  variant = "btn-contained",
  startIcon,
  endIcon,
  isLoading,
  hasRippleEffect = true,
  rippleProps,
  ...otherProps
}: IButtonProps): JSX.Element {
  return (
    <button
      {...otherProps}
      className={twMerge(
        "Dui-Button-root",
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-1 transition-colors",
        startIcon || endIcon ? "gap-2" : "",
        isLoading && "text-transparent",
        className,
        [variant, size],
      )}
    >
      {startIcon && (
        <span
          className={twJoin(
            "Dui-startIcon-root transition-opacity",
            isLoading && "opacity-0",
          )}
        >
          {startIcon}
        </span>
      )}

      {children}

      {endIcon && (
        <span
          className={twJoin(
            "Dui-endIcon-root transition-opacity",
            isLoading && "opacity-0",
          )}
        >
          {endIcon}
        </span>
      )}

      {isLoading && (
        <div
          className={twJoin(
            "absolute inset-0 flex items-center justify-center",
          )}
        >
          {/* <Spinner1 /> */}
          <Dot1 />
        </div>
      )}

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
