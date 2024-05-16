import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { useCharacterData } from "./hooks/useCharacterData/useCharacterData";
import { CardsCharacter, SelectFilter } from "./components";
import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";

export const CharacterView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const {
    onChange,
    dataFiltered,
    searchValue,
    onGenderChange,
    onStatusChange,
  } = useCharacterData();

  const placeHolder = "personaje";

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerComponent />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <Col xs={4} lg={6} className="mb-3 pt-3 col-buscador-rickMorty">
              <InputSearch
                onChange={onChange}
                searchValue={searchValue}
                placeHolder={placeHolder}
              />
            </Col>
            <SelectFilter
              onStatusChange={onStatusChange}
              onGenderChange={onGenderChange}
            />
          </Row>
          <Row className="card-scroll-views">
            {dataFiltered && dataFiltered?.length ? (
              dataFiltered.map((elem) => (
                <CardsCharacter elem={elem} key={elem.id} />
              ))
            ) : (
              <Col className="vista-sin-resultados">
                <h6>No hay resultados</h6>
              </Col>
            )}
          </Row>
        </>
      )}
    </>
  );
};
