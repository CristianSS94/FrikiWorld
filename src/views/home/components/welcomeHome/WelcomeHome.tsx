import { FC } from "react";
import { Col, Row } from "react-bootstrap";

export const WelcomeHome: FC = () => {
  return (
    <Row>
      <Col xs={12} className="text-center">
        <h1>Bienvenido a FrikiWorld</h1>
      </Col>
      <Col xs={12} className="text-center">
        <h2 className="mb-4">Adelante, elige que te apetece ver</h2>
      </Col>
    </Row>
  );
};
