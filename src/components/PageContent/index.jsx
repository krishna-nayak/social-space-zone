import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import HeaderLayout from "../../layouts/HeaderLayout";

import AppRoutes from "../AppRoutes";
import DashboardRoute from "../DashboardRoutes/DashboardRoutes";
const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route
          path="/social/*"
          element={
            <HeaderLayout>
              <DashboardRoute />
            </HeaderLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Index;
