import { FC, ReactNode, createContext } from "react";
import { ERoutes } from "../models/enums/Common-routes";

export type TKeyConfigApis = "0" | "1" | "2" | "3";

export interface IApisPanel {
  apiName: string;
  apiImage: string;
  apiUrl: string;
  apiDescription: string;
}

export interface IConfigApis extends Record<TKeyConfigApis, IApisPanel> {}

const apisData: IConfigApis = {
  "0": {
    apiName: "RICK AND MORTY ",
    apiImage: "images/rick-morty.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia.",
  },
  "1": {
    apiName: "LOS SIMPSON",
    apiImage: "images/the-simpson.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
  "2": {
    apiName: "STAR WARS",
    apiImage: "images/star-wars.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
  "3": {
    apiName: "POKÉMON",
    apiImage: "images/pokemon.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
};

interface IFrikiWorldContext {
  apisData: IConfigApis;
}

export const FrikiWorldContext = createContext<IFrikiWorldContext>({
  apisData,
});

interface IFrikiWorldProviderProps {
  children: ReactNode;
}

export const FrikiWorldProvider: FC<IFrikiWorldProviderProps> = ({
  children,
}) => {
  return (
    <FrikiWorldContext.Provider value={{ apisData }}>
      {children}
    </FrikiWorldContext.Provider>
  );
};
