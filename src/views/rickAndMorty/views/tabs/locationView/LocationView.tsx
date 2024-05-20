import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import {
  InputSearch,
  SpinnerLoading,
  ViewNoResults,
} from "../../../../../components";
import { TableLocation } from "./components/tableLocation/TableLocation";
import { useLocationData } from "./hooks/useLocationData";

export const LocationView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const { dataFiltered, configLocationSearch } = useLocationData();

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerLoading />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch {...configLocationSearch} />
          </Row>
          <Row className="table-scroll-view">
            {dataFiltered && dataFiltered?.length ? (
              <TableLocation dataFiltered={dataFiltered} />
            ) : (
              <ViewNoResults colClassName="vista-sin-resultados" />
            )}
          </Row>
        </>
      )}
    </>
  );
};
