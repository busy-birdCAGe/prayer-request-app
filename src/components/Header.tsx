import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  const location = useLocation().pathname;

  // Mapping of route paths to display titles
  const routeTitles: Record<string, string> = {
    "/requests": "Requests",
    "/community": "Community",
    "/notifications": "Notifications",
  };

  // Getting the display title based on the current route
  const currentTitle = routeTitles[location] || "Unknown Page";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "end",
          height: "100%",
          px: "6%",
          pb: "5px",
        }}
      >
        <Typography variant="title">{currentTitle}</Typography>
        <Link to="settings">
          <SettingsIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
