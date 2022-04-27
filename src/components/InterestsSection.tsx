import React, { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// My stuff
import Interest, { InterestCategory, interests } from "../models/interests";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  buttons: {
    marginBottom: theme.spacing(5)
  },
  interest: {
    marginBottom: theme.spacing(5),
    display: "flex"
  },
  interestContent: { display: "1 0 auto" },
  interestName: { marginBottom: theme.spacing(1) },
  interestDescription: {
    marginBottom: theme.spacing(3)
  },
  interestImage: {
    minWidth: "300px"
  },
  selected: {
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.dark
  }
}));

const InterestBox = (interest: Interest): JSX.Element => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.interest}>
      <CardContent className={classes.interestContent}>
        <Typography variant="h4" className={classes.interestName}>
          {interest.name}
        </Typography>
        {interest.description.map((description, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            className={classes.interestDescription}
          >
            {description}
          </Typography>
        ))}
        {interest.buttonIcon && (
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
        )}
      </CardContent>
      {interest.imagePath && (
        <CardMedia
          className={classes.interestImage}
          image={interest.imagePath}
        ></CardMedia>
      )}
    </Card>
  );
};

export default function InterestsSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [category, setCategory] = useState<InterestCategory>(InterestCategory.All);

  const handleClick = (newCategory: InterestCategory): void => {
    if (newCategory !== category) {
      setCategory(newCategory);
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Typography variant="h1" color="primary">
              {t("interests.title")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className={classes.buttons}>
              <ButtonGroup disableElevation color="secondary" variant="contained">
                {Object.values(InterestCategory).map(
                  (interestCategory: InterestCategory, index: number) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => handleClick(interestCategory)}
                        className={
                          interestCategory === category ? classes.selected : undefined
                        }
                      >
                        {t(`interests.filter.${interestCategory.valueOf()}`)}
                      </Button>
                    );
                  }
                )}
              </ButtonGroup>
            </div>
            <div>
              {interests
                .filter(
                  (interest: Interest) =>
                    category === InterestCategory.All || interest.category === category
                )
                .map((interest: Interest, index: number) => (
                  <div key={index}>
                    <InterestBox {...interest} />
                  </div>
                ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
