import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import HeaderLayout from "./layouts/HeaderLayout";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

function PageNotFound() {
  return (
    <div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>
  );
}

export default App;
