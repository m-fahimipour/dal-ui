import type { JSX } from "react";

import type { IBase } from "../common";
import type { TElementAttributes } from "../global";

export type TBlockProps<
  T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
> = {
  component?: T;
} & TElementAttributes<T> &
  IBase;

declare const Block: (props: TBlockProps) => JSX.Element;

export default Block;
