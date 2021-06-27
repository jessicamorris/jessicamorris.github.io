import React, { useContext } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// MUI Icons
import MenuIcon from "@material-ui/icons/Menu";

// My stuff
import ThemePicker from "./ThemePicker";
import LanguagePicker from "./LanguagePicker";
import AppearanceContext from "../contexts/appearance";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    color: "black"
  },
  name: {
    flexGrow: 1,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));

export default function AppHeader(): JSX.Element {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const { isDarkMode, setIsDarkMode, themeIndex, setThemeIndex } =
    useContext(AppearanceContext);

  const menuButtonGroup = (
    <ButtonGroup
      variant="text"
      orientation={
        useMediaQuery(theme.breakpoints.down("sm")) ? "vertical" : "horizontal"
      }
      disableRipple
    >
      <Button color="inherit">Home</Button>
      <Button color="inherit">Skills</Button>
      <Button color="inherit">Experience</Button>
      <Button color="inherit">Interests</Button>
      <Button color="inherit">Resume</Button>
      <Button color="inherit">Contact</Button>
    </ButtonGroup>
  );

  return (
    <AppBar position="fixed" className={classes.root} elevation={isDarkMode ? 0 : 3}>
      <Toolbar>
        {useMediaQuery(theme.breakpoints.down("sm")) && (
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap className={classes.name}>
          Jessica D. Morris
        </Typography>
        {useMediaQuery(theme.breakpoints.up("md")) && menuButtonGroup}
        <ThemePicker />
        <LanguagePicker />
      </Toolbar>
      {useMediaQuery(theme.breakpoints.down("sm")) && (
        <Toolbar>{menuButtonGroup}</Toolbar>
      )}
    </AppBar>
  );
}
