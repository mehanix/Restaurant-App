import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../utils/providers/UserContextProvider";

const NavbarComponent = () => {
  const { user, isLogged, logout } = useContext<any>(UserContext);

  if (!isLogged) {
    return null;
  }

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Reserve&Eat</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Restaurants</Nav.Link>
          <Nav.Link href="/reservations">Reservations</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Navbar.Text>
            Logged in as {user.firstName + " " + user.lastName}.
          </Navbar.Text>
          <Button className="ms-4" variant="outline-secondary" onClick={logout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
