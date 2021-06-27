import React, { useState } from "react";
import { createMuiTheme, Theme, ThemeProvider } from "@material-ui/core/styles";
import { Overrides } from "@material-ui/core/styles/overrides";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import AppearanceContext from "../contexts/appearance";
import Themes from "../models/themes";

const overrides: Overrides = {
  MuiTypography: {
    h1: {
      fontSize: "2.25rem",
      margin: "0 0 2.25rem"
    },
    h2: { fontSize: "1.75rem", fontWeight: 300, margin: "20px 0 10px" },
    h3: {
      fontWeight: 700,
      marginTop: "1.5rem",
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.5rem"
    },
    paragraph: {
      fontSize: "1rem"
    },
    body1: {
      fontSize: "1rem"
    },
    body2: { fontSize: "0.9rem" }
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
    useMediaQuery("(prefers-color-scheme: dark)")
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
