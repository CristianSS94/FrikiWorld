import axios from "axios";
import { ESimpsonRoutes } from "../../../enums/los-simpson-routes";
import { useContext, useEffect, useState } from "react";
import { TEpisodeSimpsonDTO } from "../../../models/IEpisodeSimpson";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";

export const useEpisodeSimpson = () => {
  const [simpsonEpisode, setSimpsonEpisode] = useState<TEpisodeSimpsonDTO>();
  const { setLoadingView } = useContext(FrikiWorldContext);

  const getAllEpisodeSimpson = () => {
    setLoadingView(true);
    axios
      .get(ESimpsonRoutes.EPISODE)
      .then((res) => {
        setSimpsonEpisode(res.data);
      })
      .finally(() => setLoadingView(false));
  };

  useEffect(() => getAllEpisodeSimpson(), []);

  return { simpsonEpisode };
};
