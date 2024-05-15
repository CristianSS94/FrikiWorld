import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { ICharacter } from "../../../../../../models/ICharacterDTO";

interface ICardsFrontProps {
  elem: ICharacter;
  handleShowBack: () => void;
}

export const CardFrontRM: FC<ICardsFrontProps> = ({ elem, handleShowBack }) => {
  return (
    <div className="card-front">
      <Card.Img variant="top" src={elem.image} />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Button onClick={handleShowBack} className="boton-masInfo-RickMorty">
          <i className="pi pi-eye"></i>
        </Button>
      </Card.Body>
    </div>
  );
};
