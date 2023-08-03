import { useMediaQuery, useTheme } from "@mui/material";
import { Navigate} from "react-router-dom";
import SettingsList from "./SettingsList";

const SettingsPage = () => {

  const theme = useTheme()  
    
  //checking if device width is 600px or less
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return mobile ? <SettingsList/> : <Navigate to='accountInfo'/>

};

export default SettingsPage;
