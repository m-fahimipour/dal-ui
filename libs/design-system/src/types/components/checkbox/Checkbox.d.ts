import type { InputHTMLAttributes, ReactNode } from "react";

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  iconComponent?: ReactNode;
}

declare const Checkbox: (props: ICheckboxProps) => JSX.Element;

export default Checkbox;
