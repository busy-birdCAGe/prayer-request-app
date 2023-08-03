import { Outlet} from "react-router-dom";
import SettingsPage from "../pages/settingsPage/SettingsPage";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const SettingsRoutes = () => {

    const theme = useTheme()  
    
    //checking if device width is 600px or less
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return matches ? <Outlet/> :  <Box><SettingsPage/><Outlet/></Box>
};

export default SettingsRoutes;
