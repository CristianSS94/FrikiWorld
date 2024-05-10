import { FC, useContext } from "react";

import { Card, Col, Container, Row } from "react-bootstrap";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import "./RickMortyLanding.scss";

export const RickMortyLanding: FC = () => {
  const { apisData } = useContext(FrikiWorldContext);

  return (
    <Container fluid>
      {apisData && (
        <Row>
          <Col lg={6}></Col>
          <Col lg={6}>
            <img
              className="w-100"
              src={apisData[0].apiImage}
              alt="Imagen-Rick-Morty"
            />
          </Col>
          <Col>
            <p>{apisData[0].apiDescription}</p>
          </Col>
          <Col lg={6}></Col>
        </Row>
      )}
    </Container>
  );
};
