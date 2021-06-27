import React, { useContext } from "react";

// Material UI
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Switch from "@material-ui/core/Switch";
import { makeStyles, Theme } from "@material-ui/core/styles";

// MUI Icons
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import PaletteIcon from "@material-ui/icons/Palette";

// My stuff
import Themes, { AppTheme } from "../models/themes";
import AppearanceContext from "../contexts/appearance";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  selected: {
    backgroundColor: theme.palette.secondary.main
  },
  lightnessToggle: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25)
  },
  lightnessSwitch: {
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5)
  }
}));

export default function ThemePicker(): JSX.Element {
  // Menu
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { isDarkMode, setIsDarkMode, themeIndex, setThemeIndex } =
    useContext(AppearanceContext);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef<boolean>(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      if (anchorRef.current) {
        anchorRef.current.focus();
      }
    }

    prevOpen.current = open;
  }, [open]);

  const handleMenuToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleThemeClicked = (themeIndex: number, event: any) => {
    if (setThemeIndex !== null) {
      setThemeIndex(themeIndex);
    }
    handleMenuClose(event);
  };

  const handleDarkModeChange = (value: boolean) => {
    if (setIsDarkMode !== null) {
      setIsDarkMode(value);
    }
  };

  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        color="inherit"
        component="span"
        onClick={handleMenuToggle}
      >
        <PaletteIcon />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <MenuList>
                  <MenuItem unselectable="on" button={false} tabIndex={-1}>
                    <div className={classes.lightnessToggle}>
                      <Brightness7Icon />
                      <Switch
                        size="small"
                        className={classes.lightnessSwitch}
                        tabIndex={0}
                        checked={isDarkMode}
                        onChange={(_e, checked) => {
                          handleDarkModeChange(checked);
                        }}
                      />
                      <Brightness4Icon />
                    </div>
                  </MenuItem>
                  {Themes.map((theme: AppTheme, index: number) => {
                    return (
                      <MenuItem
                        tabIndex={0}
                        onClick={(e) => handleThemeClicked(index, e)}
                      >
                        {theme.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
