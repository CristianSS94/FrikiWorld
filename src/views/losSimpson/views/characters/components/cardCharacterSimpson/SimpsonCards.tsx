import { FC, useState } from "react";
import { ICharaterSimpson } from "../../../../models/ICharacterSimpson";
import { Card, Col, ColProps } from "react-bootstrap";
import { CardFrontSimpson } from "./cardFront/CardFrontSimpson";
import { CardBackSimpson } from "./cardBack/CardBackSimpson";

interface SimpsonCardsProps {
  elem: ICharaterSimpson;
  colClass?: ColProps;
}

export const SimpsonCards: FC<SimpsonCardsProps> = ({ elem, colClass }) => {
  const [showQuote, setShowQuote] = useState<boolean>(false);

  const handleQuote = () => {
    setShowQuote(!showQuote);
  };

  return (
    <Col {...colClass}>
      <Card className="card-personajes-simpson">
        {!showQuote ? (
          <CardFrontSimpson elem={elem} handleQuote={handleQuote} />
        ) : (
          <CardBackSimpson elem={elem} handleQuote={handleQuote} />
        )}
      </Card>
    </Col>
  );
};
