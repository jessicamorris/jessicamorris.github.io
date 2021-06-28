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
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";

// MUI Icons
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import LockIcon from "@material-ui/icons/Lock";
import SchoolIcon from "@material-ui/icons/School";
import TwitterIcon from "@material-ui/icons/Twitter";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

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
    fontSize: "1.75rem",
    fontWeight: 300,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  title: { fontSize: "1rem", fontWeight: 300, marginTop: theme.spacing(1) },
  employer: {
    fontSize: "1rem",
    fontWeight: 300,
    marginTop: theme.spacing(1)
  },
  socials: {
    marginTop: theme.spacing(3)
  },
  iconList: {
    listStyle: "none",
    i: {
      fontWeight: 900
    }
  },
  iconListBullet: {
    marginLeft: `-${theme.spacing(5)}px`,
    position: "absolute",
    textAlign: "center",
    lineHeight: "inherit"
  },
  iconListItem: { marginBottom: theme.spacing(3) }
}));

const StyledListItemIcon = withStyles(
  {
    root: {
      margin: "1.5rem 0 0 0"
    }
  },
  { withTheme: true }
)(ListItemIcon);

const Profile = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.profile}>
      <Avatar className={classes.avatar}>JM</Avatar>
      <Typography variant="h2" className={classes.name}>
        Jessica D. Morris
      </Typography>
      <Typography variant="h3" className={classes.title} color="primary">
        {t("Biography job title")}
      </Typography>
      <Typography variant="h3" className={classes.employer} color="secondary">
        {t("Biography job employer")}
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
        <IconButton
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
        </IconButton>
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
        {t("Biography title")}
      </Typography>
      <Typography paragraph>
        <Trans i18nKey="Biography content 1" components={{ a: <Link /> }} />
      </Typography>
      <Typography paragraph>{t("Biography content 2")}</Typography>
      <Typography paragraph>{t("Biography content 3")}</Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="primary" style={{ fontWeight: "bold" }}>
            {t("Biography interests title")}
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText>{t("Biography interest 1")}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ViewQuiltIcon />
              </ListItemIcon>
              <ListItemText>{t("Biography interest 2")}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <KeyboardIcon />
              </ListItemIcon>
              <ListItemText>{t("Biography interest 3")}</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="primary" style={{ fontWeight: "bold" }}>
            {t("Biography education title")}
          </Typography>
          <List dense disablePadding>
            <ListItem alignItems="flex-start">
              <StyledListItemIcon>
                <SchoolIcon />
              </StyledListItemIcon>
              <ListItemText>
                <div>
                  <p>{t("Biography education 1 degree")}</p>
                  <p>{t("Biography education 1 school")}, 2017</p>
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
