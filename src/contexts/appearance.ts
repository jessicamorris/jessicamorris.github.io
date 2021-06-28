import React, { createContext } from "react";

export interface AppearanceContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | null;
  themeIndex: number;
  setThemeIndex: React.Dispatch<React.SetStateAction<number>> | null;
}

export const AppearanceContext = createContext<AppearanceContextProps>({
  isDarkMode:
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
  setIsDarkMode: null,
  themeIndex: 0,
  setThemeIndex: null
});

export default AppearanceContext;
