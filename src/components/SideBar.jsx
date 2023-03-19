import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { ImFeed } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const styles = {
  color: {
    bgNav: "#fff",
  },
};

const sideMenu = [
  { name: "Feed", link: "/", icon: <ImFeed size={24} /> },
  // { name: "My community", link: "/community" },
  // { name: "Explore", link: "/explore" },
  // { name: "Notification", link: "/notification" },
  { name: "Profile", link: "/profile", icon: <CgProfile size={24} /> },
  { name: "logout", link: "/logout", icon: <FiLogOut size={24} /> },
];

const SideBar = () => {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();
  const handleSelect = (eventKey) => navigate(eventKey);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  return (
    <Nav variant="pills" className="flex-column position-sticky" style={{ top: "55px" }} activeKey={active} onSelect={handleSelect}>
      {sideMenu.map((item, index) => (
        <Nav.Item key={index} className="mx-4 my-1">
          <Nav.Link eventKey={item.link}>
            {" "}
            <span>{item.icon}</span> <span>{item.name}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SideBar;

/* 

    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse" style={{ minHeight: "100%", backgroundColor: styles.color.bgNav, border: "1px solid #fff" }}>
      <div class="position-sticky top-0">
        <div className="py-1"></div>
        <div class="list-group list-group-flush mt-4 px-2">
          <a href="#" class="list-group-item list-group-item-action py-3 ripple active border-0 rounded" aria-current="true">
            <i class="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Home</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-area fa-fw me-3"></i>
            <span>Profile</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-lock fa-fw me-3"></i>
            <span>Participants</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-pie fa-fw me-3"></i>
            <span>Contant</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-3 ripple border-0 rounded" style={{ backgroundColor: styles.color.bgNav }}>
            <i class="fas fa-chart-line fa-fw me-3"></i>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </nav>

*/
