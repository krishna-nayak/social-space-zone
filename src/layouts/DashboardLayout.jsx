import React from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Row>
        <Col xl={2} lg={3}>
          <SideBar />
        </Col>
        <Col xl={10} sm={9}>
          {children}
        </Col>
      </Row>
    </>
  );
}
