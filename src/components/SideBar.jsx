import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { ImFeed } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

import { HiUserGroup } from "react-icons/hi";
import { MdTravelExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const styles = {
  color: {
    bgNav: "#fff",
  },
};

const sideMenu = [
  { name: "Feed", link: "/social", icon: <ImFeed size={24} /> },
  { name: "My community", link: "/social/community", icon: <HiUserGroup size={24} /> },
  { name: "Explore", link: "/social/explore", icon: <MdTravelExplore size={24} /> },
  { name: "Notification", link: "/social/notification", icon: <IoIosNotifications size={24} /> },
  { name: "Profile", link: "/social/profile", icon: <CgProfile size={24} /> },
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
    <Nav variant="pills" className="flex-column position-sticky" style={{ top: "70px" }} activeKey={active} onSelect={handleSelect}>
      {sideMenu.map((item, index) => (
        <Nav.Item key={index} className="mx-4 my-1">
          <Nav.Link eventKey={item.link} className="d-flex align-items-center">
            <span>{item.icon}</span> <span className="ms-3">{item.name}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default SideBar;
