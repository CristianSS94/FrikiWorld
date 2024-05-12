import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { InputSearch } from "../components";
import { CardsLocation } from "./components/cardsLocation/CardsLocation";
import { useLocationData } from "./hooks/useLocationData";
import { SpinnerCharacter } from "../../../../../components/SpinnerCharacter/SpinnerCharacter";

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
