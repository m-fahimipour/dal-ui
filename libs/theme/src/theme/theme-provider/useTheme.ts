import { useContext } from "react";
import ThemeContext from "../theme-provider/ThemeContext";
import type { ITheme } from "../../types/theme-provider";

function useTheme(): ITheme {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw Error("please use ThemeProvider");
  }

  return theme;
}

export default useTheme;
