import { createContext } from "react";
import type { ITheme } from "../../types/theme-provider";

const ThemeContext = createContext<ITheme | undefined>({});

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
