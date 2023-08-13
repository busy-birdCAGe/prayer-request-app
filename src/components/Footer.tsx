import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Footer = () => {
  return (
    <Box sx={{ alignItems: "end" }}>
      <Divider />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          px: "15%",
          pt: "20px",
        }}
      >
        <Link to={"requests"}>
          <DescriptionOutlinedIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
        <Link to={"community"}>
          <ReplyOutlinedIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
        <Link to={"community"}>
          <LanguageOutlinedIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
        <Link to={"notifications"}>
          <NotificationsOutlinedIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
