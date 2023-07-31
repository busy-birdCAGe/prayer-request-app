import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface FormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("name of event " + event.target.name);
    setFormData((prevFormData) => {
        console.log(prevFormData)
        return{...prevFormData, [name]: value }
        } 
        );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    // Here, you can handle the submission of sign-up information.
    // You may want to store it in state or send it to a server, etc.
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

      >
        Submit
      </Button>
    </Box>
  );
};

export default SignUpForm;
