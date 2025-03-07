import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import type { ITypographyProps } from "../typography/Typography";

export interface IFormLabel
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  label: ReactNode;
  control: ReactElement<InputHTMLAttributes<HTMLInputElement>>;
  componentsProps?: {
    typography?: ITypographyProps;
  };
  labelPosition?: "top" | "bottom" | "start" | "end";
  // input props
  disabled?: boolean;
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  checked?: InputHTMLAttributes<HTMLInputElement>["checked"];
}

declare const FormLabel: (props: IFormLabel) => JSX.Element;

export default FormLabel;
