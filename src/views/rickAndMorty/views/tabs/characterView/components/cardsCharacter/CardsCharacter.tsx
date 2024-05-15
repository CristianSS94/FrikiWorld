import { FC, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { ICharacter } from "../../../../../models/ICharacterDTO";
import { CardBackRM } from "./cardBack/CardBackRM";
import { CardFrontRM } from "./cardFront/CardFrontRM";

interface ICardsCharacterProps {
  elem: ICharacter;
}

export const CardsCharacter: FC<ICardsCharacterProps> = ({ elem }) => {
  const [showBack, setShowBack] = useState<boolean>(false);

  const handleShowBack = () => {
    setShowBack(!showBack);
  };

  return (
    <Col xs={6} md={4} lg={3} xl={2} key={elem.id} className="mb-3">
      <Card className="card-personajes-rickmorty">
        {!showBack ? (
          <CardFrontRM elem={elem} handleShowBack={handleShowBack} />
        ) : (
          <CardBackRM elem={elem} handleShowBack={handleShowBack} />
        )}
      </Card>
    </Col>
  );
};
