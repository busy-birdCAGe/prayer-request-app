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

  const boxShadowStyle = {
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.05), 0px 0px 8px 4px rgba(0, 0, 0, 0.05)"
  };

  return (
    <Box
      sx={{
        mt: "20%",
      }}
    >
      <img src={unity} alt="logo" style={{ width: 105 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: 8 }}>
          <Tabs
            style={boxShadowStyle}
            sx={{
              minHeight: "20px",
              mb: 6,
              borderRadius: 100,
              "& .MuiTab-root": {
                borderRadius: "25px",
                color: "#000000",
                width: "108px",
                minHeight: "20px",
                fontWeight: "bold",
                fontSize: "12px"

              },
              "& button:focus": { outlineColor: "transparent" },
              "& button.Mui-selected": { bgcolor: "#F9F871" },
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
            value={tab}
            onChange={handleChange}
            textColor="primary"
            centered
          >
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
        </Box>
      </Box>

      <Typography component="div" role="tabpanel" p={2}>
        {tab === 0 ? <SignInForm /> : <SignUpForm setTab={setTab} />}
      </Typography>
    </Box>
  );
};

export default AuthPage;
