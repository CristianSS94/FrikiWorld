import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SelectGeneral } from "../components/SelectGeneral/SelectGeneral";
import { CardsCharacter } from "./components/cardsCharacter/CardsCharacter";
import { useCharacterData } from "./hooks/useCharacterData/useCharacterData";

export const CharacterView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const {
    dataFiltered,
    configCharacterSpinner,
    configCharacterGenderSelector,
    configCharacterInputSearch,
    configCharacterStatusSelector,
  } = useCharacterData();

  return (
    <>
      {loadingView ? (
        <SpinnerComponent {...configCharacterSpinner} />
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch {...configCharacterInputSearch} />
            <SelectGeneral {...configCharacterGenderSelector} />
            <SelectGeneral {...configCharacterStatusSelector} />
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
