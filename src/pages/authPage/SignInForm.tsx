import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, useTheme } from "@mui/material";
import { userService } from "../../services/user";

const LogInForm = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const theme = useTheme();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await userService.signInWithEmailAndPassword(email, password);
      //TODO make this a modal
      alert("Sign in successful!");
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
      onSubmit={handleSubmit}
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
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          variant="standard"
          //   required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          variant="standard"
          //   required
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
        color={"primary"}
        variant={"contained"}
        type={"submit"}
      >
        Submit
      </Button>
    </Box>
  );
};

export default LogInForm;
