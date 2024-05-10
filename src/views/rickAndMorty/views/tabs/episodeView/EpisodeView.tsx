import { FC, useContext } from "react";
import { Row } from "react-bootstrap";
import { RickMortyContext } from "../../../context/RickMortyContext";

import { CardsEpisode } from "./components/cardsEpidode/CardsEpisode";
import { useEpidodeData } from "./hooks/useEpisodeData";
import { InputSearch, SpinnerCharacter } from "../components";

export const EpisodeView: FC = () => {
  const { loadingCharacter } = useContext(RickMortyContext);
  const { onChange, searchValue, dataFiltered } = useEpidodeData();
  const placeHolder = "epidosio";

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
              <CardsEpisode elem={elem} key={elem.id} />
            ))}
          </Row>
        </>
      )}
    </>
  );
};
