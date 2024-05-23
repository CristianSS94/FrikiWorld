import { FC } from "react";
import { Card } from "react-bootstrap";
import { ICharaterSimpson } from "../../../../../models/ICharacterSimpson";

interface ICardFrontSimpsonProps {
  elem: ICharaterSimpson;
  handleQuote: () => void;
}

export const CardFrontSimpson: FC<ICardFrontSimpsonProps> = ({
  elem,
  handleQuote,
}) => {
  return (
    <>
      <Card.Img
        onClick={handleQuote}
        className="imagen-personajes-simpson"
        variant="top"
        src={elem.image}
      />
      <Card.Body className="text-center" onClick={handleQuote}>
        <Card.Title className="title-character-simpson">
          {elem.character}
        </Card.Title>
        {/* <Button className="boton-vista-simpson">
          <i className="pi pi-eye"> Ver Cita</i>
        </Button> */}
      </Card.Body>
    </>
  );
};
