import { FC } from "react";
import { Card, Col } from "react-bootstrap";

import { ILocation } from "../../../../../models/ILocationDTO";

interface ICardsLocationProps {
  elem: ILocation;
}

export const CardsLocation: FC<ICardsLocationProps> = ({ elem }) => {
  return (
    <Col xs={6} md={4} lg={3} key={elem.id} className="mb-3">
      <Card className="w-100">
        <Card.Body>
          <Card.Title>
            {" "}
            <h3>{elem.name}</h3>{" "}
          </Card.Title>
          <Card.Text>{elem.type}</Card.Text>
          <Card.Text>{elem.dimension}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
