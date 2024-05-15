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
  const [filterGender, setFilterGender] = useState<string>("");
  const onGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterGender(e.target.value);
  };

  // Lógica del select de filtrar por status
  const [filterStatus, setFilterStatus] = useState<string>("");
  const onStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value);
  };

  //Logica de filtrado de los personajes
  const dataFiltered: ICharacter[] | undefined = useMemo(() => {
    let _dataFiltered = dataCharacter;

    if (searchValue) {
      _dataFiltered = _dataFiltered?.filter((e) =>
        e.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (filterStatus) {
      _dataFiltered = _dataFiltered?.filter((e) =>
        e.status.includes(filterStatus)
      );
    }
    if (filterGender) {
      _dataFiltered = _dataFiltered?.filter((e) =>
        e.gender.includes(filterGender)
      );
    }

    return _dataFiltered;
  }, [searchValue, dataCharacter, filterGender, filterStatus]);

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
