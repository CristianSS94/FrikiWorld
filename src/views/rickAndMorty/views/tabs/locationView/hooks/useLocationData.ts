import axios from "axios";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";

import { FrikiWorldContext } from "../../../../../../context/FrikiWorldContext";
import { ERickMortyRoutes } from "../../../../enums/Rick-Morty-routes";
import { ILocation, ILocationDTO } from "../../../../models/ILocationDTO";

export const useLocationData = () => {
  const [dataLocation, setDataLocation] = useState<ILocation[]>();
  const { setLoadingView } = useContext(FrikiWorldContext);

  const arrayPromesasData = useMemo(() => {
    const array = Array.from({ length: 7 }, (_, i) => i + 1);
    const arrayPromesas = array.map((index) =>
      axios.get<ILocationDTO>(`${ERickMortyRoutes.LOCATION}${index}`)
    );
    return arrayPromesas;
  }, []);

  const getAllDatas = () => {
    setLoadingView(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const getDataFromApi = res.flatMap((element) => element.data.results);
        setDataLocation(getDataFromApi);
      })
      .finally(() => setLoadingView(false));
  };

  useEffect(() => getAllDatas(), [arrayPromesasData]);

  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const dataFiltered: ILocation[] | undefined = useMemo(() => {
    if (!searchValue) return dataLocation;
    return dataLocation?.filter((e) =>
      e.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, dataLocation]);

  return { dataLocation, onChange, dataFiltered, searchValue };
};
