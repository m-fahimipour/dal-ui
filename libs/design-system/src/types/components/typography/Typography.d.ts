import type { JSX } from "react";

import type { IBase } from "../common";
import type { TElementAttributes } from "../global";

type TComponent = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IDefaultTypographyVariants {}

export interface ITypographyVariants extends IDefaultTypographyVariants {}

export type TTypographyProps<T extends TComponent = TComponent> = {
  component?: T;
  variant?: keyof ITypographyVariants extends never
    ? string
    : keyof ITypographyVariants;
} & TElementAttributes<T> &
  IBase;

declare const Typography: <T extends TComponent>(
  props: TTypographyProps<T>,
) => JSX.Element;

export default Typography;
