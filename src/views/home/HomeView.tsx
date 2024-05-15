import { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { TKeyConfigApis, apisData } from "../../data/configApisData";
import "./Home.scss";

export const HomeView: FC = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="contenedor-principal-homeView">
      <Row>
        <Col xs={12} className="text-center">
          <h1>Bienvenido a FrikiWorld</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h2 className="mb-4">¿Que te apetece ver?</h2>
        </Col>
        {(Object.keys(apisData) as TKeyConfigApis[]).map((elem, index) => {
          return (
            <Col xs={12} md={6} xl={3} key={index}>
              <Card className="w-100 mb-2">
                <Card.Img
                  className="imagen-card-home"
                  variant="top"
                  src={apisData[elem].apiImage}
                />
                <Card.Body>
                  <Card.Title>
                    {apisData[elem].apiName.toUpperCase()}
                  </Card.Title>
                  <Button
                    onClick={() => navigate(apisData[elem].apiUrl)}
                    variant="dark"
                  >
                    ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
