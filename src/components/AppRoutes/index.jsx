import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Registration from "../../pages/Registration";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

function PageNotFound() {
  return <div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>;
}

export default Index;
