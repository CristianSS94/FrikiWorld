import { FC } from "react";
import { Button, Col, ColProps, Row } from "react-bootstrap";
import { IInputSearchProps, InputSearch } from "../../../../../components";
import { ICharaterSimpson } from "../../../models/ICharacterSimpson";
import { SimpsonCards } from "./cardCharacterSimpson/SimpsonCards";

interface CharacterSimpsonProps {
  simpsonCharacter: ICharaterSimpson[] | undefined;
  configInput: IInputSearchProps;
  searchSimpson: ICharaterSimpson | undefined;
  searchInputCharacter: () => void;
}

export const CharacterSimpsonLayout: FC<CharacterSimpsonProps> = ({
  simpsonCharacter,
  configInput,
  searchSimpson,
  searchInputCharacter,
}) => {
  const configClassCards: ColProps = {
    colClass: { xs: 12, lg: 3 },
  };

  const configClassSearch: ColProps = {
    colClass: { xs: 12 },
  };

  return (
    <Row className="row-contenedor-personajes">
      <Col xs={12} className="title-episode-simpson">
        <h1>Algunos protagonistas</h1>
      </Col>
      {simpsonCharacter?.map((elem, index) => (
        <SimpsonCards key={index} elem={elem} {...configClassCards} />
      ))}
      <Col className="title-episode-simpson" xs={12}>
        <h2>Busca a otros personajes</h2>
      </Col>
      <InputSearch {...configInput} />
      <Col xs={4} lg={2} className="boton-buscador-simpson">
        <Button onClick={searchInputCharacter}>Buscar</Button>
      </Col>
      {searchSimpson && (
        <SimpsonCards elem={searchSimpson} {...configClassSearch} />
      )}
    </Row>
  );
};
