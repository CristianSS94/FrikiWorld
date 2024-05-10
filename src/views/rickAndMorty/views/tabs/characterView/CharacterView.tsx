import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { InputSearch } from "../components/InputSearch/InputSearch";
import "./CharacterView.scss";
import { useCharacterData } from "./hooks/useCharacterData/useCharacterData";
import { SpinnerCharacter } from "../components/SpinnerCharacter/SpinnerCharacter";
import { CardsCharacter } from "./components/cardsCharacter/CardsCharacter";
import { RickMortyContext } from "../../../context/RickMortyContext";

export const CharacterView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, dataFiltered, searchValue } = useCharacterData();
  const placeHolder = "personaje";

  return (
    <>
      {loadingCharacter ? (
        <Row>
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
