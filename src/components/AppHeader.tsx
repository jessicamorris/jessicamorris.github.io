import React, { useContext } from "react";

// Scroller
import { Link, LinkProps } from "react-scroll";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// MUI Icons
import MenuIcon from "@material-ui/icons/Menu";

// My stuff
import ThemePicker from "./ThemePicker";
import LanguagePicker from "./LanguagePicker";
import AppearanceContext from "../contexts/appearance";

const StyledButtonGroup = withStyles({
  groupedTextHorizontal: {
    "&:not(:last-child)": {
      borderRight: "none"
    }
  },
  groupedTextVertical: {
    textAlign: "left",

    "&:not(:last-child)": {
      borderBottom: "none"
    }
  }
})(ButtonGroup);

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
  },
  button: {
    color: "inherit",
    justifyContent: theme.breakpoints.down("sm") ? "left" : "center"
  },
  active: {
    fontWeight: "bold"
  }
}));

const AppHeaderButtonGroup = (): JSX.Element => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <StyledButtonGroup
      variant="text"
      orientation={
        useMediaQuery(theme.breakpoints.down("sm")) ? "vertical" : "horizontal"
      }
      disableRipple
    >
      <Button
        className={classes.button}
        component={Link}
        activeClass={classes.active}
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        Home
      </Button>
      <Button
        className={classes.button}
        component={Link}
        activeClass={classes.active}
        to="skills"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        Skills
      </Button>
      <Button
        className={classes.button}
        component={Link}
        activeClass={classes.active}
        to="experience"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        Experience
      </Button>
      <Button
        className={classes.button}
        component={Link}
        activeClass={classes.active}
        to="interests"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        Interests
      </Button>
      <Button className={classes.button} href="/resume.pdf" target="_blank">
        Resume
      </Button>
      <Button
        className={classes.button}
        component={Link}
        activeClass={classes.active}
        to="contact"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        Contact
      </Button>
    </StyledButtonGroup>
  );
};

export default function AppHeader(): JSX.Element {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const { isDarkMode } = useContext(AppearanceContext);
  const [isBarOpen, setIsBarOpen] = React.useState<boolean>(false);

  const handleMenuButtonClick = () => {
    setIsBarOpen(!isBarOpen);
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (isBarOpen) {
          setIsBarOpen(false);
        }
      }}
    >
      <AppBar position="fixed" className={classes.root} elevation={isDarkMode ? 0 : 3}>
        <Toolbar>
          {useMediaQuery(theme.breakpoints.down("sm")) && (
            <IconButton color="inherit" onClick={handleMenuButtonClick}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap className={classes.name}>
            Jessica D. Morris
          </Typography>
          {useMediaQuery(theme.breakpoints.up("md")) && <AppHeaderButtonGroup />}
          <ThemePicker />
          <LanguagePicker />
        </Toolbar>

        {useMediaQuery(theme.breakpoints.down("sm")) && (
          <Collapse in={isBarOpen}>
            <Toolbar>
              <AppHeaderButtonGroup />
            </Toolbar>
          </Collapse>
        )}
      </AppBar>
    </ClickAwayListener>
  );
}
