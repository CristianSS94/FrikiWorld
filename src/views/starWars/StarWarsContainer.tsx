import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./StarWarsStyles.scss";

export const StarWarsContainer: FC = () => {
  return (
    <Container fluid className="container-principal-starWars">
      <Row>
        <Col>
          <h1>Próximamente</h1>
        </Col>
      </Row>
    </Container>
  );
};
