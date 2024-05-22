import { Box, Button, useTheme } from "@mui/material";
import userService from "../../services/user";
import PraPasswordField from "../../components/PraPasswordField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import PraTextField from "../../components/PraTextfield";
// import { DevTool } from "@hookform/devtools";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const theme = useTheme();

  const form = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  const { handleSubmit, control, setError } = form;

  const onSubmit = async (data: SignInFormData) => {
    try {
      await userService.signIn(data.email, data.password);
      //TODO make this a modal
      // alert("Sign in successful!");
      window.location.href = window.location + "requests"

    } catch (error: any) {
      //TODO make this a modal
      if (error.message.includes("email")) {
        setError("email", { message: error.message });
      } else if (error.message.includes("password")) {
        setError("password", { message: error.message });
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <Box
      sx={{
        width: 269,
        minHeight: "25vh",
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 200,
          "& .MuiInputBase-root, & .MuiFormLabel-root": { fontSize: "12px" },
          "& .MuiInputBase-root": { marginBottom: "10px" },
        }}
      >
        <PraTextField
          label="Email"
          name="email"
          control={control}
          type="email"
        />
        <PraPasswordField label="Password" name="password" control={control} />
      </Box>
      <Button
        sx={{
          mt: 12,
          borderRadius: 100,
          fontSize: 12,
          fontWeight: "bold",
          px: 5,
          py: 1,
          [theme.breakpoints.down("iphone7")]: {
            mt: 6,
          },
        }}
        color={"primary"}
        variant={"contained"}
        type={"submit"}
      >
        Submit
      </Button>
      {/* <DevTool control={control} /> */}
    </Box>
  );
};

export default SignInForm;
