import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import unity from "../../assets/unity.svg";

const AuthPage = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabNumber: number) => {
    setTab(tabNumber);
  };

  return (
    <Box
      sx={{
        mt: "20%",
      }}
    >
      <img src={unity} alt="logo" style={{ width: 105 }} />
      <Box sx={{ bgcolor: "white", mt: 8 }}>
        <Tabs
          sx={{ mb: 6 }}
          value={tab}
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
        {tab === 0 ? <SignInForm /> : <SignUpForm setTab={setTab} />}
      </Typography>
    </Box>
  );
};

export default AuthPage;
