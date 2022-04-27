import React from "react";

// i18n
import { Trans, useTranslation } from "react-i18next";

// Material UI
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";

// MUI Icons
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
// import InstagramIcon from "@material-ui/icons/Instagram";
import SchoolIcon from "@material-ui/icons/School";
// import TwitterIcon from "@material-ui/icons/Twitter";

// My stuff
import me from "../static/images/me.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  profile: {
    alignItems: "center",
    textAlign: "center"
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(31),
    height: theme.spacing(31),
    margin: "0 auto"
  },
  name: {
    fontFamily: '"Literata", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    fontWeight: 900,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 300,
    marginTop: 0,
    marginBottom: theme.spacing(1)
  },
  employer: {
    fontSize: "1.25rem",
    fontWeight: 300,
    marginTop: 0,
    marginBottom: theme.spacing(1)
  },
  socials: {
    marginTop: theme.spacing(3)
  },
  subheading: {
    fontWeight: 800,
    fontFamily: '"Literata", "Roboto", "Helvetica", "Arial", sans-serif',
    marginTop: theme.spacing(3),
    fontSize: theme.typography.fontSize * 1.5
  },
  spaciousLI: {
    marginBottom: theme.spacing(1)
  },
  educationIcon: {
    margin: theme.spacing(3, -2, 0),
    color: theme.palette.text.primary
  },
  "ul-edu": {
    listStyle: "none",
    marginLeft: "2.5em",
    paddingLeft: 0
  }
}));

const Profile = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.profile}>
      <Avatar className={classes.avatar} src={me}>
        JM
      </Avatar>
      <Typography variant="h2" className={classes.name}>
        Jessica D. Morris
      </Typography>
      <Typography variant="h3" className={classes.title} color="primary">
        {t("biography.job.title")}
      </Typography>
      <Typography variant="h3" className={classes.employer} color="secondary">
        {t("biography.job.employer")}
      </Typography>
      <div className={classes.socials}>
        <IconButton
          component={Link}
          href="mailto:contact@jessicamorris.dev"
          target="_blank"
          rel="noopener"
        >
          <EmailIcon fontSize="large" color="secondary" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/jessicamorris"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon fontSize="large" color="secondary" />
        </IconButton>
        {/* <IconButton
          component={Link}
          href="https://instagram.com/jess_ex_machina"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon fontSize="large" color="secondary" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/jess_ex_machina"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon fontSize="large" color="secondary" />
        </IconButton> */}
        <IconButton component={Link} href="/resume.pdf" target="_blank">
          <DeveloperBoardIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
    </div>
  );
};

const Biography = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1" color="primary">
        {t("biography.title")}
      </Typography>
      <Trans
        i18nKey="biography.content"
        components={{ a: <Link />, abbr: <abbr />, p: <Typography paragraph /> }}
      />

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="primary" className={classes.subheading}>
            {t("biography.interests.title")}
          </Typography>

          <ul>
            <li className={classes.spaciousLI}>
              <Typography variant="body2">{t("biography.interests.1")}</Typography>
            </li>
            <li className={classes.spaciousLI}>
              <Typography variant="body2">{t("biography.interests.2")}</Typography>
            </li>
            <li className={classes.spaciousLI}>
              <Typography variant="body2">{t("biography.interests.3")}</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="primary" className={classes.subheading}>
            {t("biography.education.title")}
          </Typography>
          <List dense disablePadding>
            <ListItem alignItems="flex-start">
              <ListItemIcon className={classes.educationIcon}>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText>
                <div>
                  <p>{t("biography.education.1.degree")}</p>
                  <p>{t("biography.education.1.school")}, 2017</p>
                </div>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default function BiographySection(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Biography />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
