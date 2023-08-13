import { Box } from "@mui/material";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const NavWrapper = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: "10%" }}>
        <Header />
      </Box>
      <Box sx={{ height: "80%" }}>
        <Outlet />
      </Box>
      <Box sx={{ height: "10%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default NavWrapper;
