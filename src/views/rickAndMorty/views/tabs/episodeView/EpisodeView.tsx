import { FC, useContext } from "react";
import { Row } from "react-bootstrap";

import { SpinnerComponent } from "../../../../../components/SpinnerComponent/SpinnerComponent";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { SelectGeneral } from "../components/SelectGeneral/SelectGeneral";
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
        <SpinnerComponent {...configEpsisodeSpinner} />
      ) : (
        <>
          <Row className="row-inputs-rickmorty">
            <InputSearch {...configEpisodeSearch} />
            <SelectGeneral {...configEpisodeSelector} />
          </Row>
          <Row>
            <TableEpisode dataFiltered={dataFiltered} />
          </Row>
        </>
      )}
    </>
  );
};
