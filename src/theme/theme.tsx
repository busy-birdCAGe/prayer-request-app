// theme.tsx
import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ThemeColors {
  primaryBackground: string;
  primaryText: string;
  primaryColor: string;
  // Add other common theme colors here
}

interface ThemeMode {
  light: ThemeColors;
  dark: ThemeColors;
}

const commonThemeColors: ThemeMode = {
  light: {
    primaryBackground: "#ffffff",
    primaryText: "#333333",
    primaryColor: "#000000",
    // Define other common light theme colors here
  },
  dark: {
    primaryBackground: "red",
    primaryText: "#ffffff",
    primaryColor: "#FFC0CB",

    // Define other common dark theme colors here
  },
};

export const createAppTheme = (
  colors: ThemeMode,
  themeMode: "light" | "dark"
): ThemeOptions => {
  return createTheme({
    palette: {
      mode: themeMode,
      background: {
        default: colors[themeMode].primaryBackground,
      },
      text: {
        primary: colors[themeMode].primaryText,
      },
      primary: {
        // Custom primary color for buttons and other components
        main: colors[themeMode].primaryColor,
      },
      // You can customize other aspects of the theme here
      // typography, spacing, breakpoints, etc.
    },
  });
};

export default commonThemeColors;
