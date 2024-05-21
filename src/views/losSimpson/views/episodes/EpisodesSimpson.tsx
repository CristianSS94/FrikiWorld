import { FC, useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { SpinnerLoading } from "../../../../components";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import { IEpisodeSimpson } from "../../models/IEpisodeSimpson";
import { useEpisodeSimpson } from "./hooks/useEpisodeSimpson";

export const EpisodesSimpson: FC = () => {
  const { simpsonEpisode } = useEpisodeSimpson();
  const { loadingView } = useContext(FrikiWorldContext);

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-simpson">
          <SpinnerLoading />
        </Row>
      ) : (
        <Row className="row-contenedor-episodios">
          {simpsonEpisode?.map((elem: IEpisodeSimpson) => {
            return (
              <Col
                xs={6}
                lg={3}
                className="mb-2 col-principal-episodeSimpson"
                key={elem.id}
              >
                <Card className="w-100 h-100 episode-simpson-card">
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
                  {/* <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                  </Card.Body> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
