import React, { useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// MUI Icons
import ComputerIcon from "@material-ui/icons/Computer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

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
    width: theme.spacing(7),
    height: theme.spacing(7)
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
  }
}));

interface SkillProps {
  name: string;
  description: string;
  icon?: React.FC;
}

const SkillBox = (props: SkillProps) => {
  const classes = useStyles();

  return (
    <div className={classes.skill}>
      {(props.icon && <props.icon />) || <ComputerIcon color="secondary" />}
      <Typography variant="h3" className={classes.name}>
        {props.name}
      </Typography>
      <Typography paragraph className={classes.details}>
        {props.description}
      </Typography>
    </div>
  );
};

export default function SkillsSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const handleClick = (filter: SkillCategory): void => {
    if (filter == SkillCategory.All) {
      setFilteredSkills(skills);
    } else {
      const newFilteredSkills = skills.filter((skill: Skill) => {
        skill.category === filter;
      }, skills);
      setFilteredSkills(newFilteredSkills);
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h1" color="primary" className={classes.header}>
          {t("Skills title")}
        </Typography>
        <div className={classes.buttons}>
          <ButtonGroup disableElevation color="secondary" variant="contained">
            <Button onClick={() => handleClick(SkillCategory.All)}>All</Button>
            <Button onClick={() => handleClick(SkillCategory.Programming)}>
              Programming
            </Button>
            <Button onClick={() => handleClick(SkillCategory.Infrastructure)}>
              Infrastructure
            </Button>
            <Button onClick={() => handleClick(SkillCategory.SoftSkills)}>
              Soft Skills
            </Button>
          </ButtonGroup>
        </div>
        <Grid container spacing={3}>
          {filteredSkills.map((skill, i) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <SkillBox
                  name={skill.name}
                  description={skill.description}
                  icon={skill.icon}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
