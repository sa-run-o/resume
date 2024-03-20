import { darkTheme, lightTheme } from "../themes/theme";

export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export type Theme = typeof lightTheme | typeof darkTheme;
