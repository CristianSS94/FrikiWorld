import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./PokemonStyles.scss";

export const PokemonContainer: FC = () => {
  return (
    <Container fluid className="container-principal-pokemon">
      <Row>
        <Col>
          <h1>Próximamente</h1>
        </Col>
      </Row>
    </Container>
  );
};
