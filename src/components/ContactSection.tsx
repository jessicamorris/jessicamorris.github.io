import React from "react";
import { useForm } from "react-hook-form";
import { decode } from "js-base64";

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

// Base64-encoded email, because I don't like to live life on the edge
const contact = "Y29udGFjdEBqZXNzaWNhbW9ycmlzLmRldg==";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  formField: {
    marginBottom: theme.spacing(2)
  }
}));

export default function ContactSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const url = `https://formspree.io/${decode(contact)}`;

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <FormControl className={classes.formField} fullWidth>
                    <TextField
                      {...register("name", {
                        required: true,
                        minLength: 2
                      })}
                      label={t("Contact field name")}
                      type="text"
                      variant="outlined"
                      color="secondary"
                      onChange={() => console.log(errors)}
                    />
                  </FormControl>
                  <FormControl className={classes.formField} fullWidth>
                    <TextField
                      {...register("email", { required: true })}
                      label={t("Contact field email")}
                      type="email"
                      variant="outlined"
                      color="secondary"
                    />
                  </FormControl>
                  <FormControl className={classes.formField} fullWidth>
                    <TextField
                      {...register("message", { required: true, minLength: 1 })}
                      label={t("Contact field message")}
                      variant="outlined"
                      color="secondary"
                      multiline
                      rows={10}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Button
                      id="submit"
                      type="submit"
                      variant="outlined"
                      color="secondary"
                      disableElevation
                    >
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
