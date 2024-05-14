import { FC } from "react";
import { Container } from "react-bootstrap";

import "./FooterLayout.scss";

export const FooterLayout: FC = () => {
  return (
    <Container fluid className="contenedor-principal-footerApp">
      <p>
        <i className="black">&copy; </i> 2024{" "}
        <a
          href="https://www.linkedin.com/in/cristian-sanchez-serrano/"
          target="_blank"
        >
          Cristian Sánchez Serrano.{" "}
        </a>
        Todos los derechos reservados.
      </p>
    </Container>
  );
};
