import { FC } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { IInputSearchProps, InputSearch } from "../../../../../components";
import { ICharaterSimpson } from "../../../models/ICharacterSimpson";

interface CardCharacterSimpsonProps {
  simpsonCharacter: ICharaterSimpson[] | undefined;
  configInput: IInputSearchProps;
  searchSimpson: ICharaterSimpson | undefined;
  searchInputCharacter: () => void;
}

export const CardCharacterSimpson: FC<CardCharacterSimpsonProps> = ({
  simpsonCharacter,
  configInput,
  searchSimpson,
  searchInputCharacter,
}) => {
  return (
    <Row className="row-contenedor-personajes">
      <Col xs={12} className="title-episode-simpson">
        Algunos protagonistas
      </Col>
      {simpsonCharacter?.map((elem, index) => (
        <Col xs={12} lg={3}>
          <Card key={index} className="card-personajes-simpson">
            <Card.Img
              className="imagen-personajes-simpson"
              variant="top"
              src={elem.image}
            />
            <Card.Body className="text-center">
              <Card.Title className="title-episode-simpson">
                {elem.character}
              </Card.Title>
              <Card.Text className="text-episode-simpson">
                {elem.quote}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Col className="title-episode-simpson" xs={12}>
        Busca a otros personajes
      </Col>
      <InputSearch {...configInput} />
      <Col XS={2}>
        <Button variant="warning" onClick={searchInputCharacter}>Buscar</Button>
      </Col>
      <Col xs={12}>
        {searchSimpson && (
          <Card className="card-personajes-simpson">
            <Card.Img
              className="imagen-personajes-simpson"
              variant="top"
              src={searchSimpson.image}
            />
            <Card.Body className="text-center">
              <Card.Title>{searchSimpson.character}</Card.Title>
              <Card.Text>{searchSimpson.quote}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
};
