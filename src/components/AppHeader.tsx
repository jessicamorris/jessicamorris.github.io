import React, { useContext } from "react";

// Scroller
import { Link } from "react-scroll";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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

const StyledMenuButton = withStyles({
  root: {
    "&:hover": {
      //textDecoration: "underline",
      //textDecorationThickness: "2px",
      //textUnderlineOffset: "5px"
    }
  }
})(Button);

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
  }
}));

const AppHeaderButtonGroup = (): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <StyledButtonGroup
      variant="text"
      orientation={
        useMediaQuery(theme.breakpoints.down("sm")) ? "vertical" : "horizontal"
      }
      disableRipple
    >
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        <StyledMenuButton color="inherit">Home</StyledMenuButton>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        <Button color="inherit">Skills</Button>
      </Link>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        <Button color="inherit">Experience</Button>
      </Link>
      <Link
        activeClass="active"
        to="interests"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        <Button color="inherit">Interests</Button>
      </Link>
      <Button color="inherit" href="/resume.pdf" target="_blank">
        Resume
      </Button>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={800}
        offset={-64}
      >
        <Button color="inherit">Contact</Button>
      </Link>
    </StyledButtonGroup>
  );
};

export default function AppHeader(): JSX.Element {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const { isDarkMode, setIsDarkMode, themeIndex, setThemeIndex } =
    useContext(AppearanceContext);
  const [isBarOpen, setIsBarOpen] = React.useState<boolean>(false);

  const handleMenuButtonClick = () => {
    setIsBarOpen(!isBarOpen);
  };

  return (
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
  );
}
