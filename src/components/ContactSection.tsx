import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  formField: {
    marginBottom: theme.spacing(2)
  },
  message: {
    height: theme.spacing(20)
  }
}));

export default function ContactSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Typography variant="h1" color="primary">
              {t("Contact title")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            <div>
              <form>
                <div>
                  <FormControl fullWidth className={classes.formField}>
                    <TextField
                      id="name"
                      label={t("Contact field name")}
                      variant="outlined"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.formField}>
                    <TextField
                      id="email"
                      label={t("Contact field email")}
                      type="email"
                      variant="outlined"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.formField}>
                    <TextField
                      id="message"
                      InputProps={{ className: classes.message }}
                      label={t("Contact field message")}
                      variant="outlined"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl>
                    <Button variant="outlined" color="secondary" disableElevation>
                      {t("Contact field submit")}
                    </Button>
                  </FormControl>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
