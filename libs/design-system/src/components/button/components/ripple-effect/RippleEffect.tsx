import { twJoin } from "tailwind-merge";

import type { JSX } from "react";

import type { IRippleProps } from "../../../../types/components/button/Button";
import { Typography } from "../../../typography";
import { useRippleEffect } from "./useRippleEffect";

function RippleEffect({
  ripplePosition,
  className,
}: IRippleProps): JSX.Element {
  const { rippleRef, onClick } = useRippleEffect({ ripplePosition });

  return (
    <Typography
      component="span"
      ref={rippleRef}
      className={twJoin(
        "Dui-Ripple-wrapper absolute inset-0",
        className ?? "rounded-full",
      )}
      onClick={onClick}
    />
  );
}

export default RippleEffect;
