import type { HTMLAttributes, ReactNode } from "react";

type TComponent = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TBaseElement<T extends TComponent> = T extends "p"
  ? HTMLParagraphElement
  : T extends "span"
  ? HTMLSpanElement
  : HTMLHeadingElement;

interface IBaseTypography<T extends TComponent>
  extends HTMLAttributes<TBaseElement<T>> {}

interface ITypographyVariants {}
export interface ITypography<T extends TComponent = "span">
  extends IBaseTypography<T> {
  component?: T;
  children?: ReactNode | ReactNode[];
  variants?: keyof ITypographyVariants extends never
    ? string
    : keyof ITypographyVariants;
}

declare const Typography: <T extends TComponent>(
  props: ITypography<T>
) => JSX.Element;

export default Typography;
