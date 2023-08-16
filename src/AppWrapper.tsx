// AppWrapper.tsx (or your root component)
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import createAppTheme from "./theme/theme";

import { ThemeContext, ThemeContextValue } from "./ThemeContext";
import { CssBaseline } from "@mui/material";

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    getInitialMode()
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const updateThemeMode = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? "dark" : "light");
    };

    mediaQueryList.addEventListener("change", updateThemeMode);

    return () => {
      mediaQueryList.removeEventListener("change", updateThemeMode);
    };
  }, []);

  return { themeMode, setThemeMode };
};

const getInitialMode = (): "light" | "dark" => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDarkMode ? "dark" : "light";
};

const AppWrapper: React.FC = () => {
  // const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const { themeMode, setThemeMode } = useDarkMode();

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const appTheme = createAppTheme(themeMode);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
  };

  return (
    <React.StrictMode>
      {/* Wrap the entire app with your custom ThemeProvider */}
      <ThemeContext.Provider value={themeContextValue}>
        <CssBaseline />
        {/* Wrap the Material UI ThemeProvider with the styled-components ThemeProvider */}
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default AppWrapper;
