import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { TSize } from "../types";

type TButtonVariant = "text" | "filled" | "outlined";
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  size?: TSize;
  variant?: TButtonVariant;
}
