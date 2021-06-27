import React from "react";

// i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme } from "@material-ui/core/styles";

// My stuff
import translations from "./i18n.json";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import AppHeader from "./components/AppHeader";
import BiographySection from "./components/BiographySection";
import ExperienceSection from "./components/ExperienceSection";
import InterestsSection from "./components/InterestsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import AppFooter from "./components/AppFooter";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    alignItems: "center"
  },
  "home-section": {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(15),
    "&:first-of-type": {
      paddingTop: theme.spacing(5)
    },
    "&:nth-of-type(2n)": { backgroundColor: theme.palette.action.hover }
  }
}));

i18n.use(LanguageDetector).use(initReactI18next).init(translations);

export default function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className="App">
      <CustomThemeProvider>
        <header>
          <AppHeader />
        </header>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <section id="about" className={classes["home-section"]}>
            <BiographySection />
          </section>
          <section id="skills" className={classes["home-section"]}>
            <SkillsSection />
          </section>
          <section id="experience" className={classes["home-section"]}>
            <ExperienceSection />
          </section>
          <section id="interests" className={classes["home-section"]}>
            <InterestsSection />
          </section>
          <section id="contact" className={classes["home-section"]}>
            <ContactSection />
          </section>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </CustomThemeProvider>
    </div>
  );
}
