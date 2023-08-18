import { Box, Button, useTheme } from "@mui/material";
import React from "react";
import { userService } from "../../services/user";
import PraPasswordField from "../../components/PraPasswordField";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PraTextField from "../../components/PraTextfield";

const signUpSchema = yup.object({
  userName: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^(?=.*\d)/, "Password must include at least 1 number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

interface SignUpProps {
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

interface SignUpFormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = (props: SignUpProps) => {
  const { setTab } = props;
  const theme = useTheme();

  const form = useForm<SignUpFormData>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: SignUpFormData) => {
    // console.log(data);
    try {
      await userService.signUp(
        data.userName,
        data.email,
        data.password
      );
      //TODO make this a modal
      alert(
        "Sign up successful! Please check your emails for a verification link."
      );
      setTab(0);
    } catch (error: any) {
      //TODO make this a modal
      alert(error.message);
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
          "& .MuiInputBase-root": { marginBottom: "10px" },
          "& .MuiInputBase-root, & .MuiFormLabel-root": { fontSize: "12px" },
        }}
      >
        <PraTextField label="Username" name="userName" control={control} />
        <PraTextField
          label="Email"
          name="email"
          control={control}
          type="email"
        />
        <PraPasswordField label="Password" name="password" control={control} />
        <PraPasswordField
          label="Confirm Password"
          name="confirmPassword"
          control={control}
        />
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
        color={"secondary"}
        variant={"contained"}
        type={"submit"}
      >
        Submit
      </Button>
      {/* <DevTool control={control} /> */}
    </Box>
  );
};

export default SignUpForm;
