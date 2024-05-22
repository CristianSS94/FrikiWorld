import axios from "axios";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  IInputSearchProps,
  spinnerLoadingProps,
} from "../../../../../components";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { ESimpsonRoutes } from "../../../enums/los-simpson-routes";
import { ICharaterSimpson } from "../../../models/ICharacterSimpson";

export const useCharacterSimpson = () => {
  const [simpsonCharacter, setSimpsonCharacter] =
    useState<ICharaterSimpson[]>();
  const [searchSimpson, setSearchSimpson] = useState<ICharaterSimpson>();
  const [searchValue, setSearchValue] = useState<string>("milhouse");

  const { setLoadingView } = useContext(FrikiWorldContext);

  const arrayPromesasData = useMemo(() => {
    const array = ["homer", "marge", "lisa", "bart"];
    const arrayPromesas = array.map((elem) =>
      axios.get(`${ESimpsonRoutes.CHARACTER}${elem}`)
    );
    return arrayPromesas;
  }, []);

  //llamada para traer a los protas
  const getAllCharacterSimpson = useCallback(() => {
    setLoadingView(true);
    Promise.all(arrayPromesasData)
      .then((res) => {
        const charactersData = res.map((response) => response.data[0]);
        setSimpsonCharacter(charactersData);
      })
      .finally(() => setLoadingView(false));
  }, [arrayPromesasData]);

  useEffect(() => {
    searchInputCharacter();
    getAllCharacterSimpson();
  }, [getAllCharacterSimpson]);

  const configCharacterSpinner: spinnerLoadingProps = {
    rowClassNameSpinner: "row-spinner-rickmorty",
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const configInput: IInputSearchProps = {
    colClassName: {
      xs: 8,
      lg: { span: 4, offset: 3 },
      className: "buscador-personajes-simpson",
    },
    onChange,
    placeHolder: "Ejemplo: Milhouse",
    searchValue,
  };

  //Funcion del buscador activada por el boton
  const searchInputCharacter = useCallback(() => {
    if (searchValue) {
      axios
        .get(`${ESimpsonRoutes.CHARACTER}${searchValue}`)
        .then((res) => setSearchSimpson(res.data[0]))
        .finally(() => setSearchValue(""));
    }
  }, [searchValue]);

  return {
    simpsonCharacter,
    configCharacterSpinner,
    configInput,
    searchSimpson,
    searchInputCharacter,
  };
};
