import React, { useState } from "react";

// HTML parser
import parse, { HTMLReactParserOptions } from "html-react-parser";
import { Element, DataNode } from "domhandler/lib/node";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

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
  card: {
    marginBottom: theme.spacing(5)
  },
  pin: {
    margin: theme.spacing(0, 1)
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
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Typography variant="h4" style={{ color: "inherit" }}>
          <Link href={props.companyLink} target="_blank" rel="noopener">
            {props.company}
          </Link>
        </Typography>
        <Typography variant="caption">
          {props.startDate} - {props.endDate}
          <span className={classes.pin}>&middot;</span>
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
  const [showMore, setShowMore] = useState<boolean>(false);

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
              {t("experience.title")}
            </Typography>
          </Grid>
          <Grid item sm={12} md={8}>
            {experiences
              .slice(0, showMore ? experiences.length : 5)
              .map((experience: Experience, index: number) => {
                return (
                  <Grid item xs={12} key={index}>
                    <div className={classes.card}>
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
            <Grid item sm={12} md={8}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                fullWidth
                onClick={() => setShowMore(!showMore)}
              >
                Show {showMore ? "Less" : "More"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
