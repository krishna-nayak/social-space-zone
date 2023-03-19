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
// const Home = React.lazy(() => import("./pages/Home"));
// const Profile = React.lazy(() => import("./pages/Profile"));
// const Login = React.lazy(() => import("./pages/Login"));
// const Registration = React.lazy(() => import("./pages/Registration"));

function App() {
  return (
    <HeaderLayout>
      <PageContent />
    </HeaderLayout>
  );
}

export default App;
