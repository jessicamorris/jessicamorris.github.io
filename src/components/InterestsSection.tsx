import React from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// My stuff
import Interest, { interests } from "../models/interests";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  buttons: {
    marginBottom: theme.spacing(5)
  },
  interest: {
    marginBottom: theme.spacing(5)
  }
}));

const InterestBox = (interest: Interest) => {
  const classes = useStyles();

  return (
    <div className={classes.interest}>
      <Typography variant="h4">{interest.name}</Typography>
      <Typography paragraph>{interest.description}</Typography>
      <Button
        size="small"
        variant="outlined"
        startIcon={<interest.buttonIcon />}
        onClick={() => {
          window.open(interest.buttonLink, "_blank");
        }}
      >
        {interest.buttonLabel}
      </Button>
    </div>
  );
};

export default function InterestsSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Typography variant="h1" color="primary">
              {t("Interests title")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className={classes.buttons}>
              <ButtonGroup disableElevation color="secondary" variant="contained">
                <Button>All</Button>
                <Button>Software</Button>
                <Button>Hobbies</Button>
                <Button>Causes</Button>
              </ButtonGroup>
            </div>
            <div>
              {interests.map((interest: Interest) => (
                <InterestBox {...interest} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
