import { Box } from "@mui/material";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { isMobileDevice } from "../utils/Utils";

const NavWrapper = () => {
  const location = useLocation().pathname;

  // Mapping of route paths to display titles
  const routeTitles: Record<string, string> = {
    "/requests": "Requests",
    "/community": "Community",
    "/answers": "Answers",
    "/notifications": "Notifications",
  };

  // Getting the display title based on the current route
  const currentTitle = routeTitles[location] || "Unknown Page";

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: isMobileDevice() ? "5.5%" : "10%" }}>
        <Header currentTitle={currentTitle} />
      </Box>
      <Box sx={{ height: isMobileDevice() ? "84.5%" : "80%" }}>
        <Outlet />
      </Box>
      <Box sx={{ height: "10%" }}>
        <Footer currentTitle={currentTitle} />
      </Box>
    </Box>
  );
};

export default NavWrapper;
