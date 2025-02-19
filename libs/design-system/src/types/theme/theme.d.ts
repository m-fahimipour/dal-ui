import type { ReactNode } from "react";

declare module "design-system-tw/theme" {
  export function ThemeProvider({
    children,
  }: {
    children: ReactNode[];
  }): JSX.Element;
}
