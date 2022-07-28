import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Indoor Air Quality - UEA</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
