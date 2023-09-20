import { Outlet, Navigate } from "react-router-dom";
import userService from "../services/user";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const PrivateRoutes = () => {

  const [authState, setAuthState] = useState({
    loading: false,
    authenticated: true,
  });

  useEffect(() => {
    userService.signedIn().then((d: boolean) => {
      if (d) {
        setAuthState({
          loading: false,
          authenticated: true,
        });
      } else {
        setAuthState({
          loading: false,
          authenticated: false,
        });
      }
    });
  }, []);

  if (authState.loading) {
    return <Box>loading...</Box>; //TODO: Blank loading screen for now
  } else {
    return authState.authenticated ? <Outlet /> : <Navigate to="/" />;
  }
  
};

export default PrivateRoutes;
