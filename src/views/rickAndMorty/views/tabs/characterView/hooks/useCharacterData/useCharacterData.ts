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

  const dataFiltered: ICharacter[] | undefined = useMemo(() => {
    if (!searchValue) return dataCharacter;
    return dataCharacter?.filter((e) =>
      e.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, dataCharacter]);

  console.log(dataCharacter);

  // const selectGenderChange = (e: ChangeEvent<HTMLInputElement>) => {};

  // Logica para sacar posibilidades en los filtrados de estatus:
  // const getStatusNames = () => {
  //   if (dataCharacter) {
  //     const statusNames: string[] = [];

  //     for (let i = 0; i < dataCharacter.length; i++) {
  //       const status = dataCharacter[i].status;

  //       if (!statusNames.includes(status)) {
  //         statusNames.push(status);
  //       }
  //     }

  //     return statusNames;
  //   } else {
  //     return [];
  //   }
  // };

  // const getGenderNames = () => {
  //   if (dataCharacter) {
  //     const genderNames: string[] = [];

  //     for (let i = 0; i < dataCharacter.length; i++) {
  //       const status = dataCharacter[i].gender;

  //       if (!genderNames.includes(status)) {
  //         genderNames.push(status);
  //       }
  //     }

  //     return genderNames;
  //   } else {
  //     return [];
  //   }
  // };

  return {
    dataCharacter,
    onChange,
    dataFiltered,
    searchValue,
  };
};
