import type { JSX, ReactNode } from "react";

import type {
  TAdaptiveBreakpointsArray,
  TElementAttributes,
  TFilterFalseValue,
} from "../global";

interface IDefaultCheckboxSize {
  "cb-small": true;
  "cb-medium": true;
  "cb-large": true;
}

export interface ICheckboxSize extends IDefaultCheckboxSize {}

export interface ICheckboxProps
  extends Omit<TElementAttributes<"input">, "size"> {
  checkedIcon?: ReactNode;
  isIndeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  isActiveIndeterminate?: boolean;
  size?:
    | keyof TFilterFalseValue<ICheckboxSize>
    | TAdaptiveBreakpointsArray<ICheckboxSize>;
}

declare const Checkbox: (props: ICheckboxProps) => JSX.Element;

export default Checkbox;
