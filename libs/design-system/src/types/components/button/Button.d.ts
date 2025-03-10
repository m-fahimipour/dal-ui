import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import type { IBase } from "../common";
import type { TAdaptiveBreakpointsArray, TFilterFalseValue } from "../global";

export type TLoadingType = "line-spinner" | "dot-spinner";

export interface IRippleProps {
  ripplePosition?: "center" | "float";
  className?: HTMLAttributes<HTMLSpanElement>["className"];
}

interface IDefaultButtonSize {
  "btn-small": true;
  "btn-medium": true;
  "btn-large": true;
}

export interface IButtonSize extends IDefaultButtonSize {}

interface IDefaultButtonVariant {
  "btn-text": true;
  "btn-contained": true;
  "btn-outlined": true;
}

export interface IButtonVariant extends IDefaultButtonVariant {}

interface ILoadingProps {
  component?: ReactNode;
  type?: TLoadingType;
  className?: HTMLAttributes<HTMLSpanElement>["className"];
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IBase {
  children: ReactNode;
  size?:
    | keyof TFilterFalseValue<IButtonSize>
    | TAdaptiveBreakpointsArray<IButtonSize>;
  variant?:
    | keyof TFilterFalseValue<IButtonVariant>
    | TAdaptiveBreakpointsArray<IButtonVariant>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  loadingProps?: ILoadingProps;
  hasRippleEffect?: boolean;
  rippleProps?: IRippleProps;
}

// final declare
declare const Button: (IButtonProps: IButtonProps) => JSX.Element;

export default Button;
