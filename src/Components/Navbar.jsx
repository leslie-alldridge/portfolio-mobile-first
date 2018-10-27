import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default function NavbarTop() {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <Navbar.Brand>
          <a href="#">Leslie Alldridge</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#portImg">
            Portfolio
          </NavItem>
          <NavItem eventKey={2} href="#2">
            Blog
          </NavItem>
          <NavItem eventKey={3} href="#3">
            Contact
          </NavItem>
          <NavItem eventKey={4} href="#4">
            About
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem
            eventKey={1}
            target="_blank"
            href="https://github.com/leslie-alldridge"
          >
            <i class="fab fa-github" /> Github
          </NavItem>
          <NavItem
            eventKey={2}
            target="_blank"
            href="https://www.linkedin.com/in/lesliealldridge/"
          >
            <i class="fab fa-linkedin" /> LinkedIn
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
