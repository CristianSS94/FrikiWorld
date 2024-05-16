import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { CardsEpisode } from "./components/cardsEpidode/CardsEpisode";
import { useEpidodeData } from "./hooks/useEpisodeData";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";
import { SelectFilterEpisode } from "./components/selectFilterEpisode/SelectFilterEpisode";

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
          <Row className="card-scroll-views">
            {dataFiltered && dataFiltered.length ? (
              dataFiltered?.map((elem) => (
                <CardsEpisode elem={elem} key={elem.id} />
              ))
            ) : (
              <Col className="vista-sin-resultados">
                <h6>No hay resultados</h6>
              </Col>
            )}
          </Row>
        </>
      )}
    </>
  );
};
