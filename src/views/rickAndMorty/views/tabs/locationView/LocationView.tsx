import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import {
  IInputSearchProps,
  InputSearch,
} from "../components/InputSearch/InputSearch";
import { CardsLocation } from "./components/cardsLocation/CardsLocation";
import { useLocationData } from "./hooks/useLocationData";

export const LocationView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const { onChange, searchValue, dataFiltered } = useLocationData();

  const configLocationSearch: IInputSearchProps = {
    onChange,
    searchValue,
    placeHolder: "ubicación",
    colClassName: { xs: 6, className: "pt-3 mb-3 col-buscador-rickMorty" },
  };

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerComponent />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <Col>
              <InputSearch {...configLocationSearch} />
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
