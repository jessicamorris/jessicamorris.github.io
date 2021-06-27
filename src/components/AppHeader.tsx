import React, { useContext } from "react";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

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
  title: {
    flexGrow: 1,
    fontWeight: "bold"
  }
}));

export default function AppHeader(): JSX.Element {
  const classes = useStyles();
  const { isDarkMode, setIsDarkMode, themeIndex, setThemeIndex } =
    useContext(AppearanceContext);

  return (
    <AppBar position="fixed" className={classes.root} elevation={isDarkMode ? 0 : 3}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          Jessica D. Morris
        </Typography>
        <ButtonGroup variant="text" disableRipple>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Interests</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Contact</Button>
          <ThemePicker />
          <LanguagePicker />
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
