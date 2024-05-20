import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TKeyConfigApis, apisData } from "../../../../data/configApisData";

export const CardsHomeApis: FC = () => {
  const navigate = useNavigate();
  return (
    <Row>
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
  );
};
