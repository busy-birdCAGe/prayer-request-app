import { Box } from "@mui/material";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { isMobileDevice } from "../utils/Utils";
import { navItems } from "./navConfig";

const NavWrapper = () => {
  const location = useLocation().pathname;

  // Getting the display title based on the current route
  const currentTitle =
    navItems.find((item) => item.path === location)?.title || "Unknown Page";

  return (
    <Box sx={{ width: "100%", height:"100vh" }}>
      <Box sx={{ height: isMobileDevice() ? "5.5%" : "10%" }}>
        <Header currentTitle={currentTitle} />
      </Box>
      <Box
        sx={{
          overflow:"auto",
          height: isMobileDevice() ? "84.5%" : "80%",
          bgcolor: "background.default",
        }}
      >
        <Outlet />
      </Box>
      <Box sx={{ height: "10%" }}>
        <Footer currentTitle={currentTitle} />
      </Box>
    </Box>
  );
};

export default NavWrapper;
