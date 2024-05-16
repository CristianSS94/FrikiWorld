import axios from "axios";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";

import { RickMortyContext } from "../../../../context/RickMortyContext";
import { ERickMortyRoutes } from "../../../../enums/Rick-Morty-routes";
import { IEpisodeDTO, IEpisode } from "../../../../models/IEpisodeDTO";

export const useEpidodeData = () => {
  const [dataEpisode, setDataEpisode] = useState<IEpisode[]>();
  const { setLoadingCharacter } = useContext(RickMortyContext);

  const arrayPromesasData = useMemo(() => {
    const array = Array.from({ length: 3 }, (_, i) => i + 1);
    const arrayPromesas = array.map((index) =>
      axios.get<IEpisodeDTO>(`${ERickMortyRoutes.EPISODE}${index}`)
    );
    return arrayPromesas;
  }, []);

  const getAllDatas = () => {
    setLoadingCharacter(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const getDataFromApi = res.flatMap((element) => element.data.results);
        setDataEpisode(getDataFromApi);
      })
      .finally(() => setLoadingCharacter(false));
  };

  useEffect(() => getAllDatas(), [arrayPromesasData]);

  //Logica del buscador de Episodios
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  //Lógica del Select de temporadas

  const [filterSeason, setFilterSeason] = useState<string>("");

  const onSeasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterSeason(e.target.value);
  };

  console.log(filterSeason);

  const dataFiltered: IEpisode[] | undefined = useMemo(() => {
    let _dataFiltered = dataEpisode;
    if (searchValue) {
      _dataFiltered = _dataFiltered?.filter((e) =>
        e.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (filterSeason) {
      _dataFiltered = _dataFiltered?.filter((e) =>
        e.episode.toLowerCase().includes(filterSeason.toLowerCase())
      );
    }

    return _dataFiltered;
  }, [searchValue, dataEpisode, filterSeason]);

  return { dataEpisode, onChange, dataFiltered, searchValue, onSeasonChange };
};
