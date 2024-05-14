import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { SpinnerCharacter } from "../../../../../components/SpinnerCharacter/SpinnerCharacter";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { CardsCharacter } from "./components/cardsCharacter/CardsCharacter";
import { SelectFilter } from "./components/selectFilter/SelectFilter";
import { useCharacterData } from "./hooks/useCharacterData/useCharacterData";

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
          <SpinnerCharacter />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch
              onChange={onChange}
              searchValue={searchValue}
              placeHolder={placeHolder}
            />
            <SelectFilter
              onStatusChange={onStatusChange}
              onGenderChange={onGenderChange}
            />
          </Row>
          <Row className="card-scroll-views">
            {dataFiltered && dataFiltered?.length !== 0 ? (
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
