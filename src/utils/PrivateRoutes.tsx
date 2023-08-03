import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    //TODO: Call authentication methods here
    const user = true

    return user ? <Outlet/> : <Navigate to='/'/>
};

export default PrivateRoutes;
