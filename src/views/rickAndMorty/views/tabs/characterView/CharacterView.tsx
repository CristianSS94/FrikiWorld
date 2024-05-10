import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { SpinnerCharacter } from "../../../../../components/SpinnerCharacter/SpinnerCharacter";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import "./CharacterView.scss";
import { CardsCharacter } from "./components/cardsCharacter/CardsCharacter";
import { useCharacterData } from "./hooks/useCharacterData/useCharacterData";

export const CharacterView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const { onChange, dataFiltered, searchValue } = useCharacterData();
  const placeHolder = "personaje";

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerCharacter />
        </Row>
      ) : (
        <>
          <Row>
            <InputSearch
              onChange={onChange}
              searchValue={searchValue}
              placeHolder={placeHolder}
            />
          </Row>
          <Row className="card-scroll-views">
            {dataFiltered?.map((elem) => (
              <CardsCharacter elem={elem} key={elem.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};
