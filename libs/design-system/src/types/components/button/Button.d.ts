import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { TSize } from "..";

type TButtonVariant = "text" | "filled" | "outlined";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  size?: TSize;
  variant?: TButtonVariant;
}

// final declare
declare const Button: (IButtonProps: IButtonProps) => JSX.Element;

export default Button;
