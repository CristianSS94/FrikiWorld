import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";
import { RickMortyContext } from "../../../context/RickMortyContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SelectFilterEpisode } from "./components/selectFilterEpisode/SelectFilterEpisode";
import { TableEpisode } from "./components/tableEpisode/TableEpisode";
import { useEpidodeData } from "./hooks/useEpisodeData";

export const EpisodeView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered, onSeasonChange } =
    useEpidodeData();
  const placeHolder = "epidosio";

  return (
    <>
      {loadingCharacter ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerComponent />
        </Row>
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <Col xs={6} lg={6} className="mb-3 pt-3 col-buscador-rickMorty">
              <InputSearch
                onChange={onChange}
                searchValue={searchValue}
                placeHolder={placeHolder}
              />
            </Col>
            <SelectFilterEpisode onSeasonChange={onSeasonChange} />
          </Row>
          {/* <Row className="card-scroll-views">
            {dataFiltered && dataFiltered.length ? (
              dataFiltered?.map((elem) => (
                <CardsEpisode elem={elem} key={elem.id} />
              ))
            ) : (
              <Col className="vista-sin-resultados">
                <h6>No hay resultados</h6>
              </Col>
            )}
          </Row> */}
          <Row>
            <TableEpisode dataFiltered={dataFiltered} />
          </Row>
        </>
      )}
    </>
  );
};
