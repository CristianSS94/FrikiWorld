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

  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const dataFiltered: IEpisode[] | undefined = useMemo(() => {
    if (!searchValue) return dataEpisode;
    return dataEpisode?.filter((e) =>
      e.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, dataEpisode]);

  return { dataEpisode, onChange, dataFiltered, searchValue };
};
