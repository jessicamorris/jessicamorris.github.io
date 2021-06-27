import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export interface AppTheme {
  name: string;
  palette: PaletteOptions;
}

const Themes: AppTheme[] = [
  {
    name: "Hyperfuse",
    palette: {
      primary: {
        main: "#85508f"
      },
      secondary: {
        main: "#7ce4dc"
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
