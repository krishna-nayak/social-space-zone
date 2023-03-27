import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user_token")) navigate("/login");
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        localStorage.removeItem("user_token");
        navigate("/login");
      }
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xl={2} lg={3} className="px-0">
          <SideBar />
        </Col>
        <Col xl={10} sm={9} className="px-0">
          <Container fluid>{children}</Container>
        </Col>
      </Row>
    </Container>
  );
}
