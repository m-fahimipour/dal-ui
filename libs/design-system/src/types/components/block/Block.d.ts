import type { JSX } from "react";

import type { IBase } from "../common";
import type { TElementAttributes } from "../global";

export type TBlockProps<
  T extends Exclude<keyof HTMLElementTagNameMap,"table"> = Exclude<keyof HTMLElementTagNameMap,"table">,
> = {
  component?: T;
} & TElementAttributes<T> &
  IBase;

declare const Block: (props: TBlockProps) => JSX.Element;

export default Block;
