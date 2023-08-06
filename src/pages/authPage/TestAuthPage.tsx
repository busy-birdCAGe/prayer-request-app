import { Box, Tab, Tabs, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const TestAuthPage = () => {

    const [tab, setTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, tabNumber: number) => {
      setTab(tabNumber);
    };
  
    const boxShadowStyle = {
      boxShadow:
        "0px 0px 4px 2px rgba(0, 0, 0, 0.05), 0px 0px 8px 4px rgba(0, 0, 0, 0.05)",
    };
  
    const theme = useTheme();
  
  return (
    <Box>
        <Grid xs={6}>
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
                  fontSize: "12px",
                },
                // "& button:focus": { outlineColor: "transparent" },
                "& button.Mui-selected": {
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.primary.light,
                },
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
      </Grid>
    </Box>
  );
};

export default TestAuthPage;
