import React from "react";
import { Outlet } from "react-router-dom";

//
const Dashboard = () => {
  return (
    <div className="border">
      <h3>Dashboard</h3>
      <Outlet />
    </div>
  );
};

export default Dashboard;
