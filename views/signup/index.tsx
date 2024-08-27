import loginValidation from "@/validation/loginValidation";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import supabase from "../../app/supabase";

const SignupView = () => {
  const handleSubmit = async (values: any) => {
    console.log("values", values);
    const { email, password } = values;

    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log("error", error);

    console.log("data", data);
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "50vh" }} // Full viewport height to ensure centering
    >
      <Box
        sx={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <Stack
          gap={2}
          sx={{
            width: "330px", // At least 20% of the viewport width
          }}
        >
          <Typography variant="h4" textAlign="center">
            Signup
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidation}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="inputForm">
                <Stack>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={
                      touched.email && errors.email ? errors.email : ""
                    }
                    error={touched.email && Boolean(errors.email)}
                  />
                </Stack>
                <Stack>
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    helperText={
                      touched.password && errors.password ? errors.password : ""
                    }
                    error={touched.password && Boolean(errors.password)}
                  />
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{ padding: "12px", marginTop: "20px" }}
                >
                  Signup
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SignupView;
