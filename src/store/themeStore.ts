import create from "zustand";
import { lightTheme, darkTheme } from "../themes/theme";
import { Theme, ThemeMode } from "../interfaces/theme.interface";

interface ThemeState {
  theme: Theme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeBasedOnTime: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: "light", // default theme
  theme: lightTheme,
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === "light" ? "dark" : "light",
      theme: state.themeMode === "light" ? darkTheme : lightTheme,
    })),
  setThemeBasedOnTime: () =>
    set(() => {
      const currentTime = new Date();
      const morningCutoffHour = 7;
      const nightCutoffHour = 19;
      const currentHour = currentTime.getHours();
      console.log(currentHour);
      return {
        themeMode:
          currentHour >= morningCutoffHour && currentHour < nightCutoffHour
            ? "light"
            : "dark",
        theme:
          currentHour >= morningCutoffHour && currentHour < nightCutoffHour
            ? lightTheme
            : darkTheme,
      };
    }),
}));
