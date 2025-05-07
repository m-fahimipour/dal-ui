import type { JSX } from "react";

import type { IBase } from "../common";
import type {
  TElementAttributes,
  TFilterFalseValue,
} from "../global";

type TComponent = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IDefaultTypographyVariants {
  "caption3-light": true;
  "caption3-regular": true;
  "caption3-medium": true;
  "caption3-bold": true;
  ////////////////////////////////
  "caption2-light": true;
  "caption2-regular": true;
  "caption2-medium": true;
  "caption2-bold": true;
  ////////////////////////////////
  "caption1-light": true;
  "caption1-regular": true;
  "caption1-medium": true;
  "caption1-bold": true;
  ////////////////////////////////
  "body3-light": true;
  "body3-regular": true;
  "body3-medium": true;
  "body3-bold": true;
  ////////////////////////////////
  "body2-light": true;
  "body2-regular": true;
  "body2-medium": true;
  "body2-bold": true;
  ////////////////////////////////
  "body1-light": true;
  "body1-regular": true;
  "body1-medium": true;
  "body1-bold": true;
  ////////////////////////////////
  "text-h6": true;
  "text-h5": true;
  "text-h4": true;
  "text-h3": true;
  "text-h2": true;
  "text-h1": true;
}

export interface ITypographyVariants extends IDefaultTypographyVariants {}

export type TTypographyProps<T extends TComponent = TComponent> = {
  component?: T;
  variant?: keyof TFilterFalseValue<ITypographyVariants>;
} & TElementAttributes<T> &
  IBase;

declare const Typography: <T extends TComponent>(
  props: TTypographyProps<T>,
) => JSX.Element;

export default Typography;
