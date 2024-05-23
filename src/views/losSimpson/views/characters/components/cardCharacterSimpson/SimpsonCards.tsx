import { FC, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { ICharaterSimpson } from "../../../../models/ICharacterSimpson";
import { CardBackSimpson } from "./cardBack/CardBackSimpson";
import { CardFrontSimpson } from "./cardFront/CardFrontSimpson";

interface SimpsonCardsProps {
  elem: ICharaterSimpson;
}

export const SimpsonCards: FC<SimpsonCardsProps> = ({ elem }) => {
  const [showQuote, setShowQuote] = useState<boolean>(false);

  const handleQuote = () => {
    setShowQuote(!showQuote);
  };

  return (
    <Col xs={6} lg={3}>
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
