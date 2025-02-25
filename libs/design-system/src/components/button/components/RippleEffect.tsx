import { twJoin } from "tailwind-merge";

import type { IRippleProps } from "../../../types/components/button/Button";
import { Typography } from "../../typography";
import { useRippleEffect } from "./useRippleEffect";

function RippleEffect({
  bgColor,
  ripplePosition,
  className,
}: IRippleProps): JSX.Element {
  const { rippleRef, onClick } = useRippleEffect({ ripplePosition, bgColor });

  return (
    <Typography
      component="span"
      refComponent={rippleRef}
      className={twJoin(
        "Dui-ripple-root absolute inset-0",
        className ?? "rounded-full",
      )}
      onClick={onClick}
    />
  );
}

export default RippleEffect;
