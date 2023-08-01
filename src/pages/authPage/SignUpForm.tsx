import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { userService } from '../../services/user';

interface SignUpProps {
  setTab: React.Dispatch<React.SetStateAction<number>>
}

interface FormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = (props: SignUpProps) => {

  const { setTab } = props;

  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
        return{...prevFormData, [name]: value }
        } 
        );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await userService.createUser(formData.userName, formData.email, formData.password);
      await userService.sendEmailVerification();
      //TODO make this a modal
      alert("Sign up successful! Please check your emails for a verification link.");
      setTab(0);
    }
    catch (error: any) {
      console.log(error);
      //TODO make this a modal
      alert("There was an error when signing up, please try again");
    }
  };

  return (
    <Box 
    sx={{
        width: 269,
        minHeight: '25vh',

    }}
        component="form"
        onSubmit={handleSubmit}
    >
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 200

    }}>
      <TextField
          label="Username"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          variant="standard"
        //   required
        />
      <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="standard"
        //   required
        />
      <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          variant="standard"
        //   required
        />
      <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          variant="standard"
        //   required
        />
      </Box>
      <Button
        sx={{
          mt:12,
          borderRadius: 100,
          backgroundColor: "black",
          fontSize: 12,
          px:5,
          py:1
        }}
        color={"secondary"}
        variant={"contained"}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default SignUpForm;
