import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="App w-screen h-screen px-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
