import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ERoutes } from "../../models/enums/Common-routes";
import "./Navbar.scss";

export const NavbarLayout: FC = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to={ERoutes.HOME}>
          FrikiWorld
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to={ERoutes.RYCKANDMORTY_VIEWS}
              className="col-auto link-rick-morty"
            >
              RICK AND MORTY
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={ERoutes.SIMPSON_VIEWS}
              className="col-auto link-the-simpson"
            >
              LOS SIMPSON
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={ERoutes.RYCKANDMORTY_VIEWS}
              className="col-auto link-star-wars"
            >
              STAR WARS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={ERoutes.RYCKANDMORTY_VIEWS}
              className="col-auto link-pokemon-font"
            >
              PoKéMoN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
