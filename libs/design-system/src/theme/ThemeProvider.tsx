import { useLayoutEffect, type ReactNode } from "react";

function ThemeProvider({ children }: { children: ReactNode[] }) {
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

export default ThemeProvider;
