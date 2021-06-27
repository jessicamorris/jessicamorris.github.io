import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: "center",
    zIndex: theme.zIndex.drawer + 1
  },
  copyright: {
    flexGrow: 1
  },
  hosted: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right"
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "left"
    }
  },
  toolbar: {
    padding: theme.spacing(3, 0)
  }
}));

export default function AppFooter(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="primary" className={classes.root} elevation={0}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm>
              <Typography variant="body1">© 2021 Jessica D. Morris</Typography>
            </Grid>
            <Grid item xs={12} sm className={classes.hosted}>
              <Typography variant="body1">{t("Footer hosting")}</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
