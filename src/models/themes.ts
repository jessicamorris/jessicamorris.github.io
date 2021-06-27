import { PaletteOptions } from "@material-ui/core/styles/createPalette";

import { HyperfusePurple, HyperfuseMint } from "./colours";

export interface AppTheme {
  name: string;
  palette: PaletteOptions;
}

const Themes: AppTheme[] = [
  {
    name: "Hyperfuse",
    palette: {
      primary: {
        main: HyperfusePurple[700]
      },
      secondary: {
        main: HyperfuseMint[200]
      }
    }
  },
  {
    name: "Yuri",
    palette: {
      primary: { main: "#3a4056" },
      secondary: { main: "#de5a45" }
    }
  },
  {
    name: "Olivia",
    palette: {
      primary: { main: "#373737" },
      secondary: { main: "#e3b3a6" }
    }
  },
  {
    name: "Nautilus",
    palette: {
      primary: { main: "#ffdb66" },
      secondary: { main: "#8fffff" }
    }
  },
  {
    name: "Modern Dolch",
    palette: {
      primary: { main: "#81d8d0" },
      secondary: { main: "#797d80" }
    }
  }
];

export default Themes;
