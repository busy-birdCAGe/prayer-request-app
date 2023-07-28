import React, { useState } from "react";
import { Tabs, Tab, Box, Typography} from "@mui/material";
import SignInForm from "./SignUpForm";
import LogInForm from "./SignInForm";
import unity from "../../assets/unity.svg";

const AuthPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        mt: "20%",

      }}
    >
        <img src={unity} alt="logo" style={{ width: 105}}/>
      <Box sx={{ bgcolor: "white", mt: 8}}>
        <Tabs
          sx={{mb:6}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
      </Box>

      <Typography component="div" role="tabpanel" p={2}>
        {value === 0 ? <LogInForm /> : <SignInForm />}
      </Typography>
    </Box>
  );
};

export default AuthPage;
