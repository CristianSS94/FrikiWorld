import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { CardsLocation } from "./components/cardsLocation/CardsLocation";
import { useLocationData } from "./hooks/useLocationData";
import { SpinnerCharacter } from "../../../../../components/SpinnerCharacter/SpinnerCharacter";
import { InputSearch } from "../components/InputSearch/InputSearch";

export const LocationView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered } = useLocationData();
  const placeHolder = "ubicación";

  return (
    <>
      {loadingCharacter ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerCharacter />
        </Row>
      ) : (
        <>
          <Row className="row-input-rickmorty">
            <InputSearch
              onChange={onChange}
              searchValue={searchValue}
              placeHolder={placeHolder}
            />
          </Row>
          <Row className="card-scroll-views">
            {dataFiltered?.map((elem) => (
              <CardsLocation elem={elem} key={elem.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};
