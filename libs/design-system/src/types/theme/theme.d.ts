import type { JSX, ReactNode } from "react";

declare module "dal-ui/theme" {
  export function ThemeProvider({
    children,
  }: {
    children: ReactNode[];
  }): JSX.Element;
}
