import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FrikiWorldContext } from "../../../../../context/FrikiWorldContext";
import { ESimpsonRoutes } from "../../../enums/los-simpson-routes";
import { ICharaterSimpsonDTO } from "../../../models/ICharacterSimpson";

export const useCharacterSimpson = () => {
  const [simpsonCharacter, setSimpsonCharacter] =
    useState<ICharaterSimpsonDTO>();
  const { setLoadingView } = useContext(FrikiWorldContext);

  const getAllCharacterSimpson = () => {
    setLoadingView(true);
    axios
      .get(ESimpsonRoutes.CHARACTER)
      .then((res) => setSimpsonCharacter(res.data))
      .finally(() => setLoadingView(false));
  };

  useEffect(() => {
    getAllCharacterSimpson();
  }, []);

  return { simpsonCharacter };
};
