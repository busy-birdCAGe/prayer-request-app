import { Outlet} from "react-router-dom";
import SettingsList from "../pages/settingsPage/SettingsList";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SettingsRoutes = () => {

    const theme = useTheme()  
    
    //checking if device width is 600px or less
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return mobile ? <Outlet/> :  <Box><SettingsList/><Outlet/></Box>
};

export default SettingsRoutes;
