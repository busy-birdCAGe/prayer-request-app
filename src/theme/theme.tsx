// theme.tsx
import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ThemeColors {
  primaryBackground: string;
  primaryText: string;
  primaryColor: string;
  secondaryColor: string;
  contrastTextColor: string;
  paper: string;
  black: string;
  tabColor: string;
  // Add other common theme colors here
}

interface ThemeMode {
  light: ThemeColors;
  dark: ThemeColors;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    iphone7: true; // adds the `mobile` breakpoint
  }
}

const commonThemeColors: ThemeMode = {
  light: {
    primaryBackground: "#ffffff",
    primaryText: "#000000",
    primaryColor: "#000000",
    secondaryColor: "#000000",
    contrastTextColor: "#ffffff",
    paper: "white",
    black: "#000000",
    tabColor: "#F9F871"

    // Define other common light theme colors here
  },
  dark: {
    primaryBackground: "#ffffff",
    primaryText: "#ffffff",
    primaryColor: "#ffffff",
    secondaryColor: "#ffffff",
    contrastTextColor: "#000000",
    paper: "black",
    black: "#000000",
    tabColor: "#F9F871"

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
        light: colors[themeMode].black,
        contrastText: colors[themeMode].contrastTextColor,
      },
      secondary: {
        main: colors[themeMode].secondaryColor,
        light: colors[themeMode].tabColor,
        contrastText: colors[themeMode].contrastTextColor,
      },

      // You can customize other aspects of the theme here
      // typography, spacing, breakpoints, etc.
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        iphone7: 380,
      },
    },
  });
};

export default commonThemeColors;
