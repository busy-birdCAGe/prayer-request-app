// ThemeContext.tsx
import { createContext, useContext } from "react";

export interface ThemeContextValue {
  themeMode: "light" | "dark"; // Specify the type here as 'light' or 'dark'
  toggleTheme: () => void;
}

const defaultContextValue: ThemeContextValue = {
  themeMode: "light",
  toggleTheme: () => {
    console.warn("ThemeContext not provided! Using default light theme.");
  },
};

export const ThemeContext =
  createContext<ThemeContextValue>(defaultContextValue);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
