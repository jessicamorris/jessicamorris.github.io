import React from "react";

// HTML parser
import parse, { HTMLReactParserOptions } from "html-react-parser";
import { Element, DataNode } from "domhandler/lib/node";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// MUI Icons
import RoomIcon from "@material-ui/icons/Room";

// My stuff
import Experience, { experiences } from "../models/experiences";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  experience: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px"
  },
  experienceBoop: {
    textAlign: "center",
    flexDirection: "column",
    display: "flex",
    flex: "0 0 auto",
    width: "auto",
    maxWidth: "100%"
  },
  experienceCard: {
    marginBottom: theme.spacing(5)
  }
}));

interface ExperienceCardProps {
  title: string;
  company: string;
  companyLink: string;
  startDate: string;
  endDate: string;
  location: string;
  children?: string | JSX.Element | JSX.Element[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{props.title}</Typography>
        <Typography variant="h4">
          <Link href={props.companyLink} target="_blank" rel="noopener">
            {props.company}
          </Link>
        </Typography>
        <Typography paragraph>
          {props.startDate} - {props.endDate} <RoomIcon fontSize="inherit" />
          {props.location}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default function ExperienceSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.type === "tag" && domNode.tagName === "a") {
          return (
            <Link {...domNode.attribs}>
              {domNode.children.map((child) => {
                const childData = child as DataNode;
                return childData.data;
              })}
            </Link>
          );
        }
      }
    }
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Typography variant="h1" color="primary">
              {t("Experience title")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            {experiences.map((experience: Experience, index: number) => {
              return (
                <Grid item xs={12} key={index}>
                  <div className={classes.experienceCard}>
                    <ExperienceCard
                      title={experience.title}
                      company={experience.employer}
                      companyLink={experience.companyLink}
                      startDate={experience.startDate}
                      endDate={experience.endDate}
                      location={experience.location}
                    >
                      {parse(experience.responsibilities, options)}
                    </ExperienceCard>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
