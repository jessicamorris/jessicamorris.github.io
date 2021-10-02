import React, { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// My stuff
import Skill, { SkillCategory, skills } from "../models/skills";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  header: {
    textAlign: "center"
  },
  skill: {
    textAlign: "center"
  },
  featurette: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  name: {
    marginTop: 0,
    marginBottom: theme.spacing(1)
  },
  details: {
    marginTop: 0,
    marginBottom: theme.spacing(3)
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(5)
  },
  selected: {
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.dark
  }
}));

interface SkillBoxProps {
  name: string;
  description: string;
  icon: typeof SvgIcon;
}

const SkillBox = (props: SkillBoxProps) => {
  const classes = useStyles();

  return (
    <div className={classes.skill}>
      <props.icon color="secondary" className={classes.featurette} />
      <Typography variant="h3" className={classes.name}>
        {props.name}
      </Typography>
      <Typography className={classes.details} variant="body2">
        {props.description}
      </Typography>
    </div>
  );
};

export default function SkillsSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [category, setCategory] = useState(SkillCategory.All);

  const handleClick = (newCategory: SkillCategory): void => {
    if (newCategory !== category) {
      setCategory(newCategory);
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1" color="primary" className={classes.header}>
          {t("skills.title")}
        </Typography>
        <div className={classes.buttons}>
          <ButtonGroup disableElevation color="secondary" variant="contained">
            {Object.values(SkillCategory).map(
              (skillCategory: SkillCategory, index: number) => {
                return (
                  <Button
                    key={index}
                    onClick={() => handleClick(skillCategory)}
                    className={
                      skillCategory === category ? classes.selected : undefined
                    }
                  >
                    {t(`skills.filter.${skillCategory.valueOf()}`)}
                  </Button>
                );
              }
            )}
          </ButtonGroup>
        </div>
        <Grid container spacing={3}>
          {skills
            .filter(
              (skill: Skill) =>
                category === SkillCategory.All || skill.category === category
            )
            .map((skill, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <SkillBox
                    name={skill.name}
                    description={skill.description}
                    icon={skill.icon}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <Typography align="center" paragraph>
              Icons sourced from{" "}
              <Link
                href="https://thenounproject.com"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="always"
              >
                The Noun Project
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
