import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const NavWrapper = () => {
  

  return (
    <Box>This page is contained inside of navWrapper
      <Outlet />
    </Box>
  );
};

export default NavWrapper;
