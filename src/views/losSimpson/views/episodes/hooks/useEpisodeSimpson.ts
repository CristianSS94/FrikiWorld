import axios from "axios";
import { ESimpsonRoutes } from "../../../enums/los-simpson-routes";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
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

  // const [ filterSeason, setFilterSeason ] = useState<String>("")

  // const onSeasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setFilterSeason(e.target.value);
  // };

  // const episodeFiltered: TEpisodeSimpsonDTO | undefined = useMemo(() => {
  //   let _episodeFiltered = simpsonEpisode;
  //   if(filterSeason){
  //     _episodeFiltered = _episodeFiltered?.filter((e)=> e.season.includes(1))
  //   }
  // }, []);

  return { simpsonEpisode };
};
