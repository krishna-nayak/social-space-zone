import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {window.location.pathname === "/login" || window.location.pathname === "/registration" ? null : (
        <>
          <Header />
          <div className="row m-0 p-0">
            <div className="col-3 px-0">
              <SideBar />
            </div>
            <div className="col px-0 mx-0 bg-light rounded">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<div style={{ minHeight: "calc(100vh - 51px)" }}>Page Not Found:404</div>} />
              </Routes>
            </div>
            {/* </div> */}
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
