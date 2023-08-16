import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { SvgIcon } from "@mui/material";

interface NavIconProps {
  to: string;
  icon: React.ComponentType;
  currentTitle: string;
  targetTitle: string;
}

const NavIcon = (props: NavIconProps) => {
  const { to, icon, currentTitle, targetTitle } = props;
  const isActive = currentTitle === targetTitle;
  const color = isActive ? "primary" : "inactive";

  return (
    <IconButton component={Link} to={to} color={color}>
      <SvgIcon component={icon} sx={{ fontSize: 25 }} />
    </IconButton>
  );
};

export default NavIcon;
