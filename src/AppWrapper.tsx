// AppWrapper.tsx (or your root component)
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "@emotion/react";
import App from "./App";
import commonThemeColors, { createAppTheme } from "./theme/theme";

import { ThemeContext, ThemeContextValue } from "./ThemeContext";

const AppWrapper: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const appTheme = createAppTheme(commonThemeColors, themeMode);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
  };

  return (
    <React.StrictMode>
      {/* Wrap the entire app with your custom ThemeProvider */}
      <ThemeContext.Provider value={themeContextValue}>
        {/* Wrap the Material UI ThemeProvider with the styled-components ThemeProvider */}
        <ThemeProvider theme={appTheme}>
          <StyledThemeProvider theme={appTheme}>
            <App />
          </StyledThemeProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default AppWrapper;
