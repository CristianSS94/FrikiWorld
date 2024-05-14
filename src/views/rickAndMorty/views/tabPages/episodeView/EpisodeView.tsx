import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { RickMortyContext } from "../../../context/RickMortyContext";
import { CardsEpisode } from "./components/cardsEpidode/CardsEpisode";
import { useEpidodeData } from "./hooks/useEpisodeData";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";

export const EpisodeView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered } = useEpidodeData();
  const placeHolder = "epidosio";

  return (
    <>
      {loadingCharacter ? (
        <Row className="row-spinner-rickmorty">
          <SpinnerComponent />
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
              <CardsEpisode elem={elem} key={elem.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};
