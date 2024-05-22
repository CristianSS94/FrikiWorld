import { FC } from "react";
import {
  IEpisodeSimpson,
  TEpisodeSimpsonDTO,
} from "../../../../models/IEpisodeSimpson";
import { Card, Col, Row } from "react-bootstrap";

interface CardEpisodeSimpsonProps {
  simpsonEpisode: TEpisodeSimpsonDTO | undefined;
}

export const CardEpisodeSimpson: FC<CardEpisodeSimpsonProps> = ({
  simpsonEpisode,
}) => {
  return (
    <Row className="row-contenedor-episodios">
      {simpsonEpisode?.map((elem: IEpisodeSimpson) => {
        return (
          <Col
            xs={6}
            sm={4}
            lg={3}
            className="mb-2 col-principal-episodeSimpson"
            key={elem.id}
          >
            <Card className="w-100 h-100 episode-simpson-card ">
              <Card.Img
                className="episode-simpson-imagen"
                variant="top"
                src={elem.thumbnailUrl}
                onError={(e: any) =>
                  (e.target.src = "/images/error-simpson.jpg")
                }
              />
              <Card.ImgOverlay className="card-episode-textImage">
                <Card.Title className="title-episode-simpson">
                  {elem.name}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
