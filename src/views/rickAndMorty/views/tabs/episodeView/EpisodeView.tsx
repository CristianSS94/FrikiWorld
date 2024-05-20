import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import {
  InputSearch,
  SelectFilter,
  SpinnerLoading,
  ViewNoResults,
} from "../../../../../components";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { TableEpisode } from "./components/tableEpisode/TableEpisode";
import { useEpidodeData } from "./hooks/useEpisodeData";

export const EpisodeView: FC = () => {
  const { loadingView } = useContext(FrikiWorldContext);
  const {
    configEpisodeSearch,
    configEpisodeSelector,
    dataFiltered,
    configEpsisodeSpinner,
  } = useEpidodeData();

  return (
    <>
      {loadingView ? (
        <SpinnerLoading {...configEpsisodeSpinner} />
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch {...configEpisodeSearch} />
            <SelectFilter {...configEpisodeSelector} />
          </Row>
          <Row className="table-scroll-view">
            {dataFiltered && dataFiltered?.length ? (
              <TableEpisode dataFiltered={dataFiltered} />
            ) : (
              <ViewNoResults colClassName="vista-sin-resultados" />
            )}
          </Row>
        </>
      )}
    </>
  );
};
