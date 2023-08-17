//TODO: Find where to place this file

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export type NavItem = {
  path: string;
  icon: React.ComponentType;
  title: string;
};

export const navItems: NavItem[] = [
  {
    path: "/requests",
    icon: DescriptionOutlinedIcon,
    title: "Requests",
  },
  {
    path: "/answers",
    icon: ReplyOutlinedIcon,
    title: "Answers",
  },
  {
    path: "/community",
    icon: LanguageOutlinedIcon,
    title: "Community",
  },
  {
    path: "/notifications",
    icon: NotificationsOutlinedIcon,
    title: "Notifications",
  },
];
