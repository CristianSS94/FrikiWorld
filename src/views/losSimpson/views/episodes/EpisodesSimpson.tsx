import { FC, useContext } from "react";

import { SpinnerLoading } from "../../../../components";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import { CardEpisodeSimpson } from "./components/cardEpisodeSimpson/CardEpisodeSimpson";
import { useEpisodeSimpson } from "./hooks/useEpisodeSimpson";

export const EpisodesSimpson: FC = () => {
  const { simpsonEpisode, configEpsisodeSpinner } = useEpisodeSimpson();
  const { loadingView } = useContext(FrikiWorldContext);

  return (
    <>
      {loadingView ? (
        <SpinnerLoading {...configEpsisodeSpinner} />
      ) : (
        <CardEpisodeSimpson simpsonEpisode={simpsonEpisode} />
      )}
    </>
  );
};
