import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { ICharacter } from "../../../../../models/ICharacterDTO";

interface ICardsCharacterProps {
  elem: ICharacter;
}

export const CardsCharacter: FC<ICardsCharacterProps> = ({ elem }) => {
  return (
    <Col xs={6} md={4} lg={3} key={elem.id} className="mb-3 ">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={elem.image} />
        <Card.Body>
          <Card.Title>{elem.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
