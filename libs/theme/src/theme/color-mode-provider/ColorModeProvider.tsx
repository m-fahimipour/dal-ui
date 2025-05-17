import { useLayoutEffect, type JSX } from "react";
import type { IColorModeProvider } from "../../types/color-mode-provider";

function ColorModeProvider({ children }: IColorModeProvider): JSX.Element {
  useLayoutEffect(() => {
    if (window) {
      const isDarkTheme = window.matchMedia(
        "(prefers-color-scheme:dark)",
      ).matches;
      const localTheme = localStorage.getItem("theme");

      if ((isDarkTheme && localTheme !== "light") || localTheme == "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
        if (!localTheme) localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";
        if (!localTheme) localStorage.setItem("theme", "light");
      }
    }
  }, []);

  return <>{children}</>;
}

export default ColorModeProvider;
