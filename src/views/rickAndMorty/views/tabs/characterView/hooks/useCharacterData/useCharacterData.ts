import axios from "axios";
import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { FrikiWorldContext } from "../../../../../../../context/FrikiWorldContext";
import { ERickMortyRoutes } from "../../../../../enums/Rick-Morty-routes";
import { ICharacterDTO } from "../../../../../models";
import { ICharacter } from "../../../../../models/ICharacterDTO";

export const useCharacterData = () => {
  const [dataCharacter, setDataCharacter] = useState<ICharacter[]>();
  const { setLoadingView } = useContext(FrikiWorldContext);

  const arrayPromesasData = useMemo(() => {
    const array = Array.from({ length: 42 }, (_, i) => i + 1);
    const arrayPromesas = array.map((index) =>
      axios.get<ICharacterDTO>(`${ERickMortyRoutes.CHARACTER}${index}`)
    );
    return arrayPromesas;
  }, []);

  const getAllDatas = () => {
    setLoadingView(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const getDataFromApi = res.flatMap((element) => element.data.results);
        setDataCharacter(getDataFromApi);
      })
      .finally(() => setLoadingView(false));
  };

  useEffect(() => getAllDatas(), [arrayPromesasData]);

  // Lógica del input text de buscar un personaje
  const [searchValue, setSearchValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  // Lógica del select de filtrar por genero

  const [filterGender, setFilterGender] = useState<string>("todos");
  const onGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterGender(e.target.value);
  };

  // Lógica del select de filtrar por status

  const [filterStatus, setFilterStatus] = useState<string>("todos");
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
  };

  // const dataFiltered: ICharacter[] | undefined = useMemo(() => {
  //   if (!searchValue) return dataCharacter;
  //   return dataCharacter?.filter((e) =>
  //     e.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // }, [searchValue, dataCharacter]);

  // type TGender = "todos" | "Female" | "Male" | "unknown" | "Genderless";

  const dataFiltered: ICharacter[] | undefined = useMemo(() => {
    if (filterGender === "todos" && filterStatus === "todos" && !searchValue)
      return dataCharacter;
    else if (
      searchValue ||
      filterGender !== "todos" ||
      filterStatus !== "todos"
    )
      return dataCharacter?.filter(
        (e) =>
          e.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          e.gender.includes(filterGender) &&
          e.status.includes(filterStatus)
      );
  }, [searchValue, dataCharacter]);

  // const selectGenderChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return {
    dataCharacter,
    onChange,
    dataFiltered,
    searchValue,
    onGenderChange,
    onStatusChange,
    filterGender,
    filterStatus,
  };
};
