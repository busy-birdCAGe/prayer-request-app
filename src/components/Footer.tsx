import { Box, Divider, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Footer = (props: { currentTitle: string }) => {
  const { currentTitle } = props;
  return (
    <Box sx={{ alignItems: "end" }}>
      <Divider />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          px: "15%",
          pt: "8px",
        }}
      >
        <IconButton
          component={Link}
          to="/requests"
          color={currentTitle == "Requests" ? "primary" : "secondary"}
        >
          <DescriptionOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton
          component={Link}
          to="/answers"
          color={currentTitle == "Answers" ? "primary" : "secondary"}
        >
          <ReplyOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton
          component={Link}
          to="/community"
          color={currentTitle == "Community" ? "primary" : "secondary"}
        >
          <LanguageOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
        <IconButton
          component={Link}
          to="/notifications"
          color={currentTitle == "Notifications" ? "primary" : "secondary"}
        >
          <NotificationsOutlinedIcon sx={{ fontSize: 25 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
