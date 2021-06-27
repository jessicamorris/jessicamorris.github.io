import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";

// MUI Icons
import TranslateIcon from "@material-ui/icons/Translate";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

export default function ThemePicker(): JSX.Element {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClick = (language: string, event: any) => {
    i18n.changeLanguage(language);
    handleClose(event);
  };

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

  return (
    <div className={classes.root}>
      <IconButton
        ref={anchorRef}
        color="inherit"
        component="span"
        onClick={handleToggle}
      >
        <TranslateIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={(e) => handleClick("en", e)} tabIndex={0}>
                    English
                  </MenuItem>
                  <MenuItem onClick={(e) => handleClick("fr", e)} tabIndex={0}>
                    Français
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
