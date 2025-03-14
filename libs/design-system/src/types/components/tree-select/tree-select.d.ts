import type { JSX, ReactElement } from "react";

interface IDefaultProperty {
  label: ReactElement | string;
  value: string;
  isChecked: boolean;
  props?: any;
  element?: ReactElement;
  hasParent?: boolean;
  children?: IDefaultProperty[];
}

export interface ITreeSelectProps<
  T extends IDefaultProperty = IDefaultProperty,
> {
  items: T[];
}

declare const TreeSelect: (props: ITreeSelectProps) => JSX.Element;

export default TreeSelect;
