import React from "react";
import { Navigate } from "react-router-dom";
import MyBooks from "./MyBooks";

const PrivateRoute = ({ auth }) => {
  return auth ? <MyBooks /> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
