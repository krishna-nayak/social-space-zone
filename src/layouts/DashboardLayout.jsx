import React from "react";
import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-3 px-0">
          <SideBar />
        </div>
        <div className="col px-0 mx-0 bg-light rounded">{children}</div>
      </div>
    </>
  );
}
