import type { HTMLAttributes, ReactNode, RefAttributes } from "react";

import type { IBase } from "../common";

type TComponent = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TBaseElement<T extends TComponent> = T extends "p"
  ? HTMLParagraphElement
  : T extends "span"
    ? HTMLSpanElement
    : HTMLHeadingElement;

interface IBaseTypography<T extends TComponent>
  extends HTMLAttributes<TBaseElement<T>> {}

interface IDefaultTypographyVariants {}

export interface ITypographyVariants extends IDefaultTypographyVariants {}

export interface ITypographyProps<T extends TComponent = TComponent>
  extends IBaseTypography<T>,
    IBase {
  component?: T;
  children?: ReactNode;
  variant?: keyof ITypographyVariants extends never
    ? string
    : keyof ITypographyVariants;
  refComponent?: RefAttributes<TBaseElement<T>>["ref"];
}

declare const Typography: <T extends TComponent>(
  props: ITypographyProps<T>,
) => JSX.Element;

export default Typography;
