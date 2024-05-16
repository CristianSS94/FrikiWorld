import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { CardsLocation } from "./components/cardsLocation/CardsLocation";
import { useLocationData } from "./hooks/useLocationData";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";

export const LocationView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered } = useLocationData();
  const placeHolder = "ubicación";

  return (
    <>
      {loadingCharacter ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerComponent />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <Col xs={6} className="pt-3 mb-3 col-buscador-rickMorty">
              <InputSearch
                onChange={onChange}
                searchValue={searchValue}
                placeHolder={placeHolder}
              />
            </Col>
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
