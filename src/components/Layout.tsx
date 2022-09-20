import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="App w-screen h-screen px-2 md:overflow-y-hidden">
      <Sidebar />
      <div className="mt-10">
        <Outlet />
      </div>  
    </div>
  );
};

export default Layout;
