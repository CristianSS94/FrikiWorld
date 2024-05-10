import axios from "axios";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { ERickMortyRoutes } from "../../../../../enums/Rick-Morty-routes";
import { ICharacterDTO } from "../../../../../models";
import { ICharacter } from "../../../../../models/ICharacterDTO";
import { RickMortyContext } from "../../../../../context/RickMortyContext";

export const useCharacterData = () => {
  const [dataCharacter, setDataCharacter] = useState<ICharacter[]>();
  const { setLoadingCharacter } = useContext(RickMortyContext);

  const arrayPromesasData = useMemo(() => {
    const array = Array.from({ length: 42 }, (_, i) => i + 1);
    const arrayPromesas = array.map((index) =>
      axios.get<ICharacterDTO>(`${ERickMortyRoutes.CHARACTER}${index}`)
    );
    return arrayPromesas;
  }, []);

  const getAllDatas = () => {
    setLoadingCharacter(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const getDataFromApi = res.flatMap((element) => element.data.results);
        setDataCharacter(getDataFromApi);
      })
      .finally(() => setLoadingCharacter(false));
  };

  useEffect(() => getAllDatas(), [arrayPromesasData]);

  //--------------------------------------------------------------

  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const dataFiltered: ICharacter[] | undefined = useMemo(() => {
    if (!searchValue) return dataCharacter;
    return dataCharacter?.filter((e) =>
      e.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, dataCharacter]);

  return {
    dataCharacter,
    onChange,
    dataFiltered,
    searchValue,
  };
};
