import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, useTheme } from "@mui/material";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import unity from "../../assets/unity.svg";
import unityWhite from "../../assets/unityWhite.svg"
import ToggleTheme from "../../components/toggleTheme";
import {env} from "../../../src/env";
import { dark } from "@mui/material/styles/createPalette";
import { useThemeContext } from "../../ThemeContext";
const AuthPage = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabNumber: number) => {
    setTab(tabNumber);
  };

  const boxShadowStyle = {
    boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.05), 0px 0px 8px 4px rgba(0, 0, 0, 0.05)"
  };

  const theme = useTheme();
  const { themeMode } = useThemeContext();

  return (
    <>
    <Box
      sx={{
        mt: "20%",
      }}
    >

      <img src={themeMode == "dark"? unityWhite : unity} alt="logo" style={{ width: 105 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: 8 }}>
          <Tabs
            style={boxShadowStyle}
            sx={{
              minHeight: "20px",
              mb: 6,
              bgcolor: theme.palette.background.default,
              borderRadius: 100,
              "& .MuiTab-root": {
                borderRadius: "25px",
                color: theme.palette.primary.light,
                width: "108px",
                minHeight: "20px",
                fontWeight: "bold",
                fontSize: "12px"

              },
              // "& button:focus": { outlineColor: "transparent" },
              "& button.Mui-selected": { bgcolor: theme.palette.primary.main},
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
            value={tab}
            onChange={handleChange}
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
    </>
  );
};

export default AuthPage;
