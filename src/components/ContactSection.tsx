import React from "react";
import { Control, useController, useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { decode } from "js-base64";

// i18n
import { useTranslation } from "react-i18next";

// Material UI
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

// Base64-encoded Formspree link, because I don't like to live life on the edge
const contact = "bWVxdmxvcXA=";

interface ValidatedTextFieldProps {
  name: "name" | "email" | "message";
  control: Control<FormData>;
  rules?: any;
  textFieldProps: TextFieldProps;
}

const ValidatedTextField = ({
  name,
  control,
  rules,
  textFieldProps
}: ValidatedTextFieldProps) => {
  const {
    field: { ref, ...inputProps }
  } = useController<FormData, typeof name>({
    name,
    control,
    rules: rules,
    defaultValue: ""
  });

  return <TextField {...inputProps} {...textFieldProps} inputRef={ref} />;
};

interface EmailConfirmModalProps {
  name: string;
}

const EmailConfirmModal = ({ name }: EmailConfirmModalProps) => {
  const [open, setOpen] = React.useState<boolean>(true);

  return (
    <div>
      <Typography paragraph>
        Thank you for your email, {name}! I'll get back to you in 1-3 business days.
      </Typography>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  formField: {
    marginBottom: theme.spacing(2)
  }
}));

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection(): JSX.Element {
  const classes = useStyles();
  const { t } = useTranslation();
  const [formspreeState, handleFormspreeSubmit] = useFormspree(decode(contact));
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: FormData) => {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    handleFormspreeSubmit(data);
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
                    <ValidatedTextField
                      name="name"
                      control={control}
                      rules={{ required: true, minLength: 2 }}
                      textFieldProps={{
                        id: "name",
                        label: t("Contact field name"),
                        type: "text",
                        variant: "outlined",
                        color: "secondary",
                        InputProps: { "aria-invalid": errors.name ? "true" : "false" },
                        error: errors.name !== undefined,
                        helperText:
                          errors.name?.type === "required" ? (
                            "Name is required."
                          ) : errors.name?.type === "minLength" ? (
                            "Please enter at least two characters."
                          ) : (
                            <br />
                          )
                      }}
                    />
                  </FormControl>

                  <FormControl className={classes.formField} fullWidth>
                    <ValidatedTextField
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      textFieldProps={{
                        id: "email",
                        label: t("Contact field email"),
                        type: "email",
                        variant: "outlined",
                        color: "secondary",
                        InputProps: { "aria-invalid": errors.email ? "true" : "false" },
                        error: errors.email !== undefined,
                        helperText:
                          errors.email?.type === "required" ? (
                            "Email is required."
                          ) : errors.message?.type === "validate" ? (
                            "Please enter a valid email."
                          ) : (
                            <br />
                          )
                      }}
                    />
                  </FormControl>
                  <FormControl className={classes.formField} fullWidth>
                    <ValidatedTextField
                      name="message"
                      control={control}
                      rules={{ required: true, minLength: 10 }}
                      textFieldProps={{
                        id: "message",
                        label: t("Contact field message"),
                        variant: "outlined",
                        color: "secondary",
                        InputProps: {
                          "aria-invalid": errors.message ? "true" : "false"
                        },
                        error: errors.message !== undefined,
                        helperText:
                          errors.message?.type === "required" ? (
                            "Message is required."
                          ) : errors.message?.type === "minLength" ? (
                            "Please enter at least 10 characters."
                          ) : (
                            <br />
                          ),
                        multiline: true,
                        rows: 10
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <Button
                      id="submit"
                      type="submit"
                      variant="outlined"
                      color="secondary"
                      disableElevation
                      disabled={formspreeState.submitting}
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
