import React from "react";
import { Outlet } from "react-router-dom";

//
const AuthLayout = () => {
  return (
    <div>
      Here is auth layout as parent
      <Outlet />
    </div>
  );
};

export default AuthLayout;
