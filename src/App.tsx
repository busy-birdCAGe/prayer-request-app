// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
// import { useThemeContext } from "./ThemeContext";
import AuthPage  from "./pages/authPage/AuthPage";
import NavWrapper from "./pages/NavWrapper";
import RequestsPage from "./pages/requestsPage/RequestsPage";
import CommunityPage from "./pages/communityPage/CommunityPage";
import NotificationsPage from "./pages/notificationsPage/NotificationsPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import AccountInfo from "./pages/settingsPage/AccountInfo";
import HelpAndSupport from "./pages/settingsPage/HelpAndSupport";
import SettingsRoutes from "./utils/SettingsRoutes";

function App() {

  const router = createBrowserRouter([
    // {
    //   TODO: create an error page to catch all nonexistent routes
    //   path: "*",
    //   element: <ErrorPage />,
    // },
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      //pathless route to nest routes
      element: <PrivateRoutes/>,
      children: [
        {
          element: <NavWrapper />,
          children: [
                {
                  index:true,
                  path: "requests",
                  element: <RequestsPage />,
                },
                {
                  path: "community",
                  element: <CommunityPage />,
                },
                {
                  path: "notifications",
                  element: <NotificationsPage />,
                },
          ]
        },
        {
          path: "settings",
          children: [
            {
              index:true,
              element: <SettingsPage />,
            },
            {
             element: <SettingsRoutes />,
             children: [
              {
                path: "accountInfo",
                element: <AccountInfo />,
              },
              {
                path: "helpAndSupport",
                element: <HelpAndSupport />,
              },
        ]

            },

      ]
        },
      ],
    },
    
  ]);

  // TODO: Move theme logic to settings page

  // const theme = useTheme(); // Get the theme object from Material UI

  // const { themeMode, toggleTheme } = useThemeContext(); // Get the theme mode and toggleTheme function from the context

  // const handleThemeToggle = () => {
  //   setCount((count) => count + 1);
  //   toggleTheme(); // Call the toggleTheme function to switch between light and dark themes
  // };

  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}

export default App;
