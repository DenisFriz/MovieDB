import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { Theme } from "@emotion/react";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { IThemeContext, IThemeMode } from "./types";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(
    (window.localStorage.getItem("theme") as IThemeMode) || IThemeMode.DARK
  );
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.DARK:
        setTheme(AppDarkTheme);
    }
  }, [themeMode]);

  const toggleThemeMode = (mode: IThemeMode) => {
    window.localStorage.setItem("theme", mode);
    setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        toggleThemeMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
