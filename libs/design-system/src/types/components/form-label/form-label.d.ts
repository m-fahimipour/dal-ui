import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
  JSX,
} from "react";

import type { TTypographyProps } from "../typography/Typography";

export interface IFormLabel
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  label: ReactNode;
  control: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
  componentsProps?: {
    typography?: TTypographyProps;
  };
  labelPosition?: "top" | "bottom" | "start" | "end";
  // input props
  disabled?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  checked?: InputHTMLAttributes<HTMLInputElement>["checked"];
  isIndeterminate?: boolean;
}

declare const FormLabel: (props: IFormLabel) => JSX.Element;

export default FormLabel;
