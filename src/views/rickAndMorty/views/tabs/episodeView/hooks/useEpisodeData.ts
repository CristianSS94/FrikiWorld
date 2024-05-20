import axios from "axios";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";

import { IInputSearchProps } from "../../../../../../components/InputSearch/InputSearch";
import { FrikiWorldContext } from "../../../../../../context/FrikiWorldContext";
import { ERickMortyRoutes } from "../../../../enums/Rick-Morty-routes";
import { optionEpisodeSelector } from "../../../../enums/Selector-Value-Episode";
import { IEpisode, IEpisodeDTO } from "../../../../models/IEpisodeDTO";
import {
  ISelectFilterProps,
  spinnerLoadingProps,
} from "../../../../../../components";

export const useEpidodeData = () => {
  const [dataEpisode, setDataEpisode] = useState<IEpisode[]>();
  const { setLoadingView } = useContext(FrikiWorldContext);

  const arrayPromesasData = useMemo(() => {
    const array = Array.from({ length: 3 }, (_, i) => i + 1);
    const arrayPromesas = array.map((index) =>
      axios.get<IEpisodeDTO>(`${ERickMortyRoutes.EPISODE}${index}`)
    );
    return arrayPromesas;
  }, []);

  const getAllDatas = () => {
    setLoadingView(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const getDataFromApi = res.flatMap((element) => element.data.results);
        setDataEpisode(getDataFromApi);
      })
      .finally(() => setLoadingView(false));
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

  //Configuracion de los select y el input

  const configEpisodeSelector: ISelectFilterProps = {
    idSelector: "Episode",
    labelClassname: "select-filter-rickMorty",
    onChange: onSeasonChange,
    optionSelector: optionEpisodeSelector,
    colProps: { xs: 6, className: "mb-3 pt-3 form-floating" },
    labelOption: "Temporada",
  };

  const configEpisodeSearch: IInputSearchProps = {
    colClassName: {
      xs: 6,
      lg: 6,
      className: "mb-3 pt-3 col-buscador-rickMorty",
    },
    onChange,
    placeHolder: "epidosio",
    searchValue,
  };

  const configEpsisodeSpinner: spinnerLoadingProps = {
    rowClassNameSpinner: "row-spinner-rickmorty",
  };

  return {
    dataEpisode,
    dataFiltered,
    configEpisodeSearch,
    configEpisodeSelector,
    configEpsisodeSpinner,
  };
};
