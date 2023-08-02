import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { userService } from "../../services/user";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          backgroundColor: "black",
          fontSize: 12,
          px: 5,
          py: 1,
        }}
        color={"secondary"}
        variant={"contained"}
        type={"submit"}
      >
        Submit
      </Button>
    </Box>
  );
};

export default LogInForm;
