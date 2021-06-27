import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    zIndex: theme.zIndex.drawer + 1
  },
  copyright: {
    flexGrow: 1
  }
}));

export default function AppFooter(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="primary" className={classes.root} elevation={0}>
      <Container>
        <Toolbar>
          <Typography variant="body1" className={classes.copyright}>
            © 2021 Jessica D. Morris
          </Typography>
          <Typography variant="body1">{t("Footer hosting")}</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
