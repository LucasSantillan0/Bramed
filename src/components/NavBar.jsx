import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
export default function NavBar (){

return<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="/">Bramed salud</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
    <Nav.Link href="/plans">Planes</Nav.Link>
    <Nav.Link href="/sucursales">Sucursales</Nav.Link>
    <NavDropdown title="Ver más..." id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Conocé Bramed</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Nuestros valores</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
}