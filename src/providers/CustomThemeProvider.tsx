import React, { useState } from "react";
import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import { Overrides } from "@material-ui/core/styles/overrides";

import AppearanceContext from "../contexts/appearance";
import Themes from "../models/themes";

const overrides: Overrides = {
  MuiTypography: {
    h1: {
      fontSize: "40.5px",
      margin: "1rem 0 1.5rem",
      fontFamily: '"Literata", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h2: {
      fontFamily: '"Literata", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1.75rem",
      fontWeight: 300,
      margin: "20px 0 10px"
    },
    h3: {
      fontWeight: 700,
      marginTop: "1.5rem",
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.15rem"
    },
    paragraph: {
      fontSize: "18px"
    },
    body1: {
      fontSize: "18px",
      lineHeight: "30px",
      marginBottom: "18px"
    },
    body2: { fontSize: "16px" }
  },
  MuiButton: {
    label: {
      textTransform: "capitalize"
    }
  }
};

export interface CustomThemeProviderProps {
  children: JSX.Element | JSX.Element[] | undefined;
}

export default function CustomThemeProvider({
  children
}: CustomThemeProviderProps): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [themeIndex, setThemeIndex] = useState<number>(0);

  const theme: Theme = createMuiTheme({
    overrides: overrides,
    palette: {
      ...Themes[themeIndex].palette,
      ...{ type: isDarkMode ? "dark" : "light" }
    }
  });

  return (
    <AppearanceContext.Provider
      value={{ isDarkMode, setIsDarkMode, themeIndex, setThemeIndex }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppearanceContext.Provider>
  );
}
