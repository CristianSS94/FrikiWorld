import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { ESimpsonRoutes } from "../../../enums/los-simpson-routes";
import { TEpisodeSimpsonDTO } from "../../../models/IEpisodeSimpson";
import { spinnerLoadingProps } from "../../../../../components";

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

  const configEpsisodeSpinner: spinnerLoadingProps = {
    rowClassNameSpinner: "row-spinner-rickmorty",
  };

  return { simpsonEpisode, configEpsisodeSpinner };
};
