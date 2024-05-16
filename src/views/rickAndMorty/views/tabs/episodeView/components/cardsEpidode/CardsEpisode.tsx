import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { IEpisode } from "../../../../../models/IEpisodeDTO";

interface ICardsEpidoseProps {
  elem: IEpisode;
}

export const CardsEpisode: FC<ICardsEpidoseProps> = ({ elem }) => {
  return (
    <Col xs={6} md={4} lg={3} key={elem.id} className="mb-3">
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title>
            {" "}
            <h3> {elem.name}</h3>{" "}
          </Card.Title>
          <Card.Text>{elem.episode}</Card.Text>
          <Card.Text>{elem.air_date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
