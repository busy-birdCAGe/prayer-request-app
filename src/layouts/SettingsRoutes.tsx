import { Outlet } from "react-router-dom";
import SettingsList from "../pages/settingsPage/SettingsList";
import { Box } from "@mui/material";
import { isMobileDevice } from "../utils/Utils";

const SettingsRoutes = () => {
  return isMobileDevice() ? (
    <Outlet />
  ) : (
    <Box>
      <SettingsList />
      <Outlet />
    </Box>
  );
};

export default SettingsRoutes;
