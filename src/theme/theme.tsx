// theme.tsx
import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ThemeColors {
  primaryBackground: string;
  primaryText: string;
  primaryColor: string;
  secondaryColor: string
  contrastTextColor: string,
  paper: string;
  blue:string;
  // Add other common theme colors here
}

interface ThemeMode {
  light: ThemeColors;
  dark: ThemeColors;
}

const commonThemeColors: ThemeMode = {
  light: {
    primaryBackground: "#ffffff",
    primaryText: "#000000",
    primaryColor: "#F9F871",
    secondaryColor: "#000000",
    contrastTextColor: "#ffffff",
    paper: "white",
    blue: "#000000"

    // Define other common light theme colors here
  },
  dark: {
    primaryBackground: "#ffffff",
    primaryText: "#ffffff",
    primaryColor: "#F9F871",
    secondaryColor: "#ffffff",
    contrastTextColor: "#000000",
    paper: "black",
    blue: "#000000"

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
        paper: colors[themeMode].paper,
        default: colors[themeMode].primaryBackground,
      },
      text: {
        primary: colors[themeMode].primaryText,
        secondary: colors[themeMode].secondaryColor,
      },
      primary: {
        // Custom primary color for buttons and other components
        main: colors[themeMode].primaryColor,
        light: colors[themeMode].blue,
        contrastText: colors[themeMode].contrastTextColor
      },
      secondary: {
        main: colors[themeMode].secondaryColor,
        contrastText: colors[themeMode].contrastTextColor

      }
      // You can customize other aspects of the theme here
      // typography, spacing, breakpoints, etc.
    },
  });
};

export default commonThemeColors;
