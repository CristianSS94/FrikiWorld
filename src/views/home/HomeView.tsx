import { FC } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
          <h2 className="mb-4">Adelante, elige que te apetece ver</h2>
        </Col>
        {(Object.keys(apisData) as TKeyConfigApis[]).map((elem, index) => {
          return (
            <Col xs={12} md={6} xl={3} key={index}>
              <Card
                className="w-100 mb-2 card-home-apis bg-dark text-white"
                onClick={() => navigate(apisData[elem].apiUrl)}
              >
                <Card.Img
                  className="imagen-card-home"
                  src={apisData[elem].apiImage}
                />
                <Card.ImgOverlay>
                  <Card.Title className={apisData[elem].apiClassName}>
                    {apisData[elem].apiName}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
