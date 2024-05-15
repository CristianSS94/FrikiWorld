import { FC } from "react";
import { ICharacter } from "../../../../../../models/ICharacterDTO";
import { Button, Card } from "react-bootstrap";

interface ICardsBackProps {
  elem: ICharacter;
  handleShowBack: () => void;
}

export const CardBackRM: FC<ICardsBackProps> = ({ elem, handleShowBack }) => {
  return (
    <div className="card-back">
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <hr />
        <Card.Text>Origen: {elem.origin.name}</Card.Text>
        <Card.Text>Especie: {elem.species}</Card.Text>
        <Card.Text>Género: {elem.gender}</Card.Text>
        <Card.Text>Estado: {elem.status}</Card.Text>
        <Button onClick={handleShowBack} className="boton-masInfo-RickMorty">
          <i className="pi pi-eye-slash"></i>
        </Button>
      </Card.Body>
    </div>
  );
};
