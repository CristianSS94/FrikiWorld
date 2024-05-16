import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IApisPanel, apisData } from "../../data/configApisData";
import { ERoutes } from "../../models/enums/Common-routes";
import "./Navbar.scss";

export const NavbarLayout: FC = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary contenedor-principal-nabvar"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to={ERoutes.HOME}
          className="estilo-principal-web"
        >
          FrikiWorld
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h-100">
            {apisData &&
              (Object.values(apisData) as IApisPanel[]).map((elem, index) => {
                return (
                  <Nav.Link
                    key={index}
                    as={Link}
                    to={elem.apiUrl}
                    className={elem.apiClassName}
                  >
                    {elem.apiName}
                  </Nav.Link>
                );
              })}
            {/* <Nav.Link>
              {" "}
              <i className="pi pi-github"></i>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
