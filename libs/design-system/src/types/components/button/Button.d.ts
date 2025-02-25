import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import type { TAdaptiveBreakpointsArray, TFilterFalseValue } from "../global";

export interface IRippleProps {
  bgColor?: string;
  ripplePosition?: "center" | "float";
  className?: HTMLAttributes<HTMLSpanElement>["className"];
}
export interface IButtonSize {
  "btn-small": true;
  "btn-medium": true;
  "btn-large": true;
}

export interface IButtonVariant {
  "btn-text": true;
  "btn-contained": true;
  "btn-outlined": true;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  size?:
    | keyof TFilterFalseValue<IButtonSize>
    | TAdaptiveBreakpointsArray<IButtonSize>;
  variant?:
    | keyof TFilterFalseValue<IButtonVariant>
    | TAdaptiveBreakpointsArray<IButtonVariant>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  hasRippleEffect?: boolean;
  rippleProps?: IRippleProps;
}

// final declare
declare const Button: (IButtonProps: IButtonProps) => JSX.Element;

export default Button;
