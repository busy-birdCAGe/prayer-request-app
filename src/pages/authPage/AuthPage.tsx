import React, { useState } from "react";
import { Tabs, Tab, Box, Typography} from "@mui/material";
import SignInForm from "./SignUpForm";
import LogInForm from "./SignInForm";
import unity from "../../assets/unity.svg";

const AuthPage = () => {
  const [page, setPage] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    setPage(newPage);
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
          value={page}
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
        {page === 0 ? <LogInForm /> : <SignInForm setPage={setPage}/>}
      </Typography>
    </Box>
  );
};

export default AuthPage;
