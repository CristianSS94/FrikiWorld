import { FC } from "react";
import { Card } from "react-bootstrap";
import { ICharaterSimpson } from "../../../../../models/ICharacterSimpson";

interface ICardBackSimpsonProps {
  elem: ICharaterSimpson;
  handleQuote: () => void;
}

export const CardBackSimpson: FC<ICardBackSimpsonProps> = ({
  elem,
  handleQuote,
}) => {
  return (
    <Card.Body onClick={handleQuote} className="card-back-simpson">
      <Card.Text className="text-character-simpson">
        {`" `}
        {elem.quote}
        {` "`}
      </Card.Text>
      <Card.Text className="text-character-simpson">
        {"-"}
        {elem.character}
      </Card.Text>{" "}
      <i className="pi pi-eye-slash"></i>{" "}
    </Card.Body>
  );
};
