import React from "react";
import Slidbar from "./Slidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      <Slidbar />
      <div className="flex-1 bg-white p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
