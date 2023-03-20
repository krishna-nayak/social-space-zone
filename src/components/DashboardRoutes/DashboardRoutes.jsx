import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Community from "../../pages/Community";
import Explore from "../../pages/Explore";
import Notification from "../../pages/Notification";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/community" exact element={<Community />} />
      <Route path="/explore" exact element={<Explore />} />
      <Route path="/notification" exact element={<Notification />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function PageNotFound() {
  return <div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>;
}

export default DashboardRoute;
