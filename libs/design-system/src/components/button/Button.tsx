import { useLayoutEffect, useState } from "react";

import { twJoin, twMerge } from "tailwind-merge";

import type { ReactNode } from "react";

import type { IButtonProps } from "../../types/components/button/Button";
import RippleEffect from "./components/RippleEffect";

function Button({
  children,
  className,
  size = "btn-medium",
  variant = "btn-contained",
  startIcon,
  endIcon,
  isLoading,
  loadingProps = {
    type: "spinner1",
  },
  hasRippleEffect = true,
  rippleProps,
  ...otherProps
}: IButtonProps): JSX.Element {
  const [loadingComponent, setLoadingComponent] = useState<ReactNode>();

  useLayoutEffect(() => {
    if (loadingProps.type == "spinner1") {
      import("./components/loading/spinner/spinner-1/Spinner1")
        .then((components) =>
          setLoadingComponent(
            <components.Spinner1 className={loadingProps.className ?? ""} />,
          ),
        )
        .catch(() => {});
    } else if (loadingProps.type == "dot1") {
      import("./components/loading/dot/dot-1/Dot1")
        .then((components) =>
          setLoadingComponent(
            <components.Dot1 className={loadingProps.className ?? ""} />,
          ),
        )
        .catch(() => {});
    }
  }, [loadingProps.type]);

  return (
    <button
      {...otherProps}
      className={twMerge(
        "Dui-Button-root",
        "relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-1 transition-colors select-none",
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
