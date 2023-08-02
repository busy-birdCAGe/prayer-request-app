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

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
      // errorElement: <ErrorPage />,
    },
    {
      // path: "/",
      element: <NavWrapper />,
      // errorElement: <ErrorPage />,
      //pathless route to catch errors
      //TODO: create an error page if we want
      children: [
        {
          // errorElement: <ErrorPage />,
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
