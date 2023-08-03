import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const SettingsPage = () => {


  return (
    <Box sx={{ display:"grid"}}>
      <Link to={"accountInfo"}>Account Info</Link>
      <Link to={"helpAndSupport"}>Help And Support</Link>
    </Box>
  );
};

export default SettingsPage;
