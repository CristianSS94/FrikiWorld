import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import {
  InputSearch,
  SelectFilter,
  SpinnerLoading,
  ViewNoResults,
} from "../../../../../components";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
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
        <SpinnerLoading {...configCharacterSpinner} />
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch {...configCharacterInputSearch} />
            <SelectFilter {...configCharacterGenderSelector} />
            <SelectFilter {...configCharacterStatusSelector} />
          </Row>
          <Row className="card-scroll-views">
            {dataFiltered && dataFiltered?.length ? (
              dataFiltered.map((elem) => (
                <CardsCharacter elem={elem} key={elem.id} />
              ))
            ) : (
              <ViewNoResults colClassName="vista-sin-resultados" />
            )}
          </Row>
        </>
      )}
    </>
  );
};
