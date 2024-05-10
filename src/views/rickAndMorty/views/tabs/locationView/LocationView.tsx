import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { InputSearch, SpinnerCharacter } from "../components";
import { CardsLocation } from "./components/cardsLocation/CardsLocation";
import { useLocationData } from "./hooks/useLocationData";

export const LocationView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered } = useLocationData();
  const placeHolder = "ubicación";

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
              <CardsLocation elem={elem} key={elem.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};
