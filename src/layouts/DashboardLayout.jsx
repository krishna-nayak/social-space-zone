import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xl={2} lg={3} className="px-0">
          <SideBar />
        </Col>
        <Col xl={10} sm={9} className="px-0">
          <Container>{children}</Container>
        </Col>
      </Row>
    </Container>
  );
}
