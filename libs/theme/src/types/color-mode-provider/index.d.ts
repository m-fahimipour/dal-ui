import type { JSX, ReactNode } from "react";

export declare const changeTheme: () => void;

export interface IColorModeProvider {
  children: ReactNode | ReactNode[];
}

declare const ColorModeProvider: (props: IColorModeProvider) => JSX.Element;

export default ColorModeProvider;
