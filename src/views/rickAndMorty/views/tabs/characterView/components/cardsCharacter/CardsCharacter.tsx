import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { ICharacter } from "../../../../../models/ICharacterDTO";

interface ICardsCharacterProps {
  elem: ICharacter;
}

export const CardsCharacter: FC<ICardsCharacterProps> = ({ elem }) => {
  return (
    <Col xs={6} md={4} lg={3} xl={2} key={elem.id} className="mb-3">
      <Card className="card-personajes-rickmorty">
        <div className="card-front">
          <Card.Img variant="top" src={elem.image} />
          <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
          </Card.Body>
        </div>
        <div className="card-back">
          <Card.Body>
            <Card.Title>{elem.name}</Card.Title>
            <hr />
            <Card.Text>Origen: {elem.origin.name}</Card.Text>
            <Card.Text>Especie: {elem.species}</Card.Text>
            <Card.Text>Género: {elem.gender}</Card.Text>
            <Card.Text>Estado: {elem.status}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
