import { twJoin, twMerge } from "tailwind-merge";

import type { IButtonProps } from "../../types/components/button/Button";
import RippleEffect from "./components/ripple-effect/RippleEffect";
import { useButton } from "./useButton";

function Button({
  children,
  className,
  size = "btn-medium",
  variant = "btn-contained",
  startIcon,
  endIcon,
  isLoading,
  loadingProps = {
    type: "line-spinner",
  },
  hasRippleEffect = true,
  rippleProps,
  disabled,
  ...otherProps
}: IButtonProps): JSX.Element {
  const { loadingComponent } = useButton({ loadingProps })

  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={twMerge(
        "Dui-Button-root",
        disabled && "Dui-Button-disabled",
        [variant, size],
        "relative inline-flex cursor-pointer disabled:cursor-auto items-center justify-center overflow-hidden rounded-full px-4 py-1 transition-colors select-none",
        startIcon || endIcon ? "gap-2" : "",
        className,
        isLoading && "text-transparent",
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

      {isLoading &&
        (loadingProps.component || (
          <div
            className={twJoin(
              "absolute inset-0 flex items-center justify-center",
            )}
          >
            {loadingComponent}
          </div>
        ))}

      {hasRippleEffect && !disabled && (
        <RippleEffect
          {...rippleProps}
        />
      )}
    </button>
  );
}

export default Button;
