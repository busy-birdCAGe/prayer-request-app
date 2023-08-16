// theme.tsx
import { createTheme, ThemeOptions } from "@mui/material/styles";

interface ThemeColors {
  textPrimary: string;
  textSecondary: string;
  textInvert: string;
  textInput: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundInvert: string;
  borderPrimary: string;
  iconPrimary: string;
  iconSecondary: string;
  accent: string;
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

//lets you use "inactive" as color input in IconButton
declare module "@mui/material" {
  interface IconButtonPropsColorOverrides {
    inactive: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    inactive: Palette["primary"];
  }

  interface PaletteOptions {
    inactive?: PaletteOptions["primary"];
  }
}

const themeColors: ThemeMode = {
  light: {
    textPrimary: "#000000",
    textSecondary: "#344145",
    textInvert: "#ffffff",
    textInput: "#8e9092",
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#f7f8f9",
    backgroundInvert: "#000000",
    borderPrimary: "#e9eaef",
    iconPrimary: "#000000",
    iconSecondary: "#c4c4c4",
    accent: "#f9f871",

    // Define other common light theme colors here
  },
  dark: {
    textPrimary: "#ffffff",
    textSecondary: "#e9eaef",
    textInvert: "#000000",
    textInput: "#8e9092",
    backgroundPrimary: "#161616",
    backgroundSecondary: "#000000",
    backgroundInvert: "#ffffff",
    borderPrimary: "#434548",
    iconPrimary: "#ffffff",
    iconSecondary: "#8e9092",
    accent: "#f9f871",
    // Define other common dark theme colors here
  },
};

const createAppTheme = (themeMode: "light" | "dark"): ThemeOptions => {
  // destructuring object, also helps us see what variables are unused
  const {
    textPrimary,
    textSecondary,
    textInvert,
    textInput,
    backgroundPrimary,
    backgroundSecondary,
    backgroundInvert,
    borderPrimary,
    iconPrimary,
    iconSecondary,
    accent,
  } = themeColors[themeMode];

  return createTheme({
    palette: {
      mode: themeMode,
      //TODO: add a background color, fix paper and default
      background: {
        paper: backgroundPrimary,
        default: backgroundSecondary,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
      primary: {
        // Custom primary color for buttons and other components
        main: iconPrimary,
        contrastText: textInvert,
      },
      secondary: {
        main: accent,
        contrastText: textPrimary,
      },
      inactive: {
        main: iconSecondary,
        contrastText: textInvert,
      },
      divider: borderPrimary,

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

export default createAppTheme;
