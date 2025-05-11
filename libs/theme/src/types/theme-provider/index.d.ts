import type { JSX, ReactNode } from "react";

export interface IThemeProvider {
  children: ReactNode | ReactNode[];
  value?: ITheme;
}

export interface ITheme {
  components?: {
    typography?: {
      defaultProps?: any;
      stylesOverride?: {
        conditions?: ICondition<any>[];
      };
    };
  };
}

export interface ICondition<T> {
  condition: T;
  result: T;
}

export declare const useTheme: () => ITheme;
declare const ThemeProvider: (props: IThemeProvider) => JSX.Element;

export default ThemeProvider;
