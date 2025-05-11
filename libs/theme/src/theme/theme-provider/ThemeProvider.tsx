import type { IThemeProvider } from "../../types/theme-provider";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ value: theme = {}, children }: IThemeProvider) {
  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
