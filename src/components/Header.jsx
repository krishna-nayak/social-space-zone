import React from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import PostInputModal from "./PostInputModal";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Social Site</Navbar.Brand>
          <Nav className="text-center">
            <Form className="d-flex position-relative">
              <Form.Control type="search" placeholder="Search" aria-label="Search" className="" style={{ width: "400px", paddingLeft: "40px" }} />
              <AiOutlineSearch className="position-absolute start-0 ms-4 top-50 translate-middle" size={20} />
            </Form>
          </Nav>
        </Container>
      </Navbar>

      <PostInputModal />
    </header>
  );
};

export default Header;
