import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
import React from "react";

import PageContent from "./components/PageContent";
import HeaderLayout from "./layouts/HeaderLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    // <HeaderLayout>
    <PageContent />
    // </HeaderLayout>
  );
}

export default App;
