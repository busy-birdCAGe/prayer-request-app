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
  divider: string;

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

  interface TypographyVariants {
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}

// TODO: Red the palette naming, to not define the same color over and over again. Similar to figma variables

const commonThemeColors: ThemeMode = {
  light: {
    primaryBackground: "#F7F8F9",
    primaryText: "#000000",
    primaryColor: "#000000",
    secondaryColor: "#c4c4c4",
    contrastTextColor: "#ffffff",
    paper: "white",
    black: "#000000",
    tabColor: "#F9F871",
    divider: "#E9EAEF",

    // Define other common light theme colors here
  },
  dark: {
    primaryBackground: "red",
    primaryText: "#ffffff",
    primaryColor: "#ffffff",
    secondaryColor: "#434548",
    contrastTextColor: "#000000",
    paper: "#161616",
    black: "#000000",
    tabColor: "#F9F871",
    divider: "#434548",

    // Define other common dark theme colors here
  },
};

export const createAppTheme = (
  colors: ThemeMode,
  themeMode: "light" | "dark"
): ThemeOptions => {
  // TODO: Maybe add this here:
  // const colors = commonThemeColors[themeMode]; // Get colors for the current theme mode

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
      divider: colors[themeMode].divider,

      // You can customize other aspects of the theme here
      // typography, spacing, breakpoints, etc.
    },
    typography: {
      title: {
        fontSize: 24,
        fontWeight: 700,
      },
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
