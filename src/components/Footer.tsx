import { Box, Divider } from "@mui/material";
import NavIcon from "./NavIcon";
import { navItems } from "../layouts/navConfig";

interface FooterProps {
  currentTitle: string;
}

const Footer = (props: FooterProps) => {
  const { currentTitle } = props;

  return (
    <Box sx={{ alignItems: "end" }}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          px: "12%",
          pt: "8px",
        }}
      >
        {navItems.map((item) => (
          <NavIcon
            to={item.path}
            icon={item.icon}
            currentTitle={currentTitle}
            targetTitle={item.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
