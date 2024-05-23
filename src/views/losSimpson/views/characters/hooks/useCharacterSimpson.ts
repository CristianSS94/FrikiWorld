import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { spinnerLoadingProps } from "../../../../../components";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { ICharaterSimpson } from "../../../models/ICharacterSimpson";

export const useCharacterSimpson = () => {
  const [dataQuotes, setDataQuotes] = useState<ICharaterSimpson[]>([]);
  const { setLoadingView } = useContext(FrikiWorldContext);

  const getAllCharacterSimpson = useCallback(() => {
    setLoadingView(true);
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=500")
      .then((res) => {
        setDataQuotes(res.data);
      })
      .finally(() => setLoadingView(false));
  }, []);

  useEffect(() => {
    getAllCharacterSimpson();
  }, [getAllCharacterSimpson]);

  const configCharacterSpinner: spinnerLoadingProps = {
    rowClassNameSpinner: "row-spinner-rickmorty",
  };

  const characterSimpson = useMemo(() => {
    if (dataQuotes.length > 0) {
      let personajesFiltrados = dataQuotes.filter((char, index) => {
        return (
          index ===
          dataQuotes.findIndex((c) => {
            return c.character === char.character;
          })
        );
      });
      return personajesFiltrados;
    }
  }, [dataQuotes]);

  return {
    configCharacterSpinner,
    characterSimpson,
  };
};
