import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = (props: { currentTitle: string }) => {
  const { currentTitle } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "end",
          height: "100%",
          px: "6%",
          pb: "8px",
        }}
      >
        <Typography variant="title">{currentTitle}</Typography>
        <Link to="settings">
          <SettingsIcon color="primary" sx={{ fontSize: 25 }} />
        </Link>
      </Box>
      <Divider />
    </>
  );
};

export default Header;
