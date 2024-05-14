import { FC, ReactNode, createContext, useState } from "react";
import { ERoutes } from "../models/enums/Common-routes";

export type TKeyConfigApis = "0" | "1" | "2" | "3";

export interface IApisPanel {
  apiName: string;
  apiImage: string;
  apiUrl: string;
  apiClassName: string;
  apiDescription: string;
}

export interface IConfigApis extends Record<TKeyConfigApis, IApisPanel> {}

const apisData: IConfigApis = {
  "0": {
    apiName: "RICK Y MORTY ",
    apiImage: "images/rick-morty.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiClassName: "link-rick-morty",
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia.",
  },
  "1": {
    apiName: "LOS SIMPSON",
    apiImage: "images/the-simpson.jpg",
    apiUrl: ERoutes.SIMPSON_VIEWS,
    apiClassName: "link-the-simpson",
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
  "2": {
    apiName: "STAR WARS",
    apiImage: "images/star-wars.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiClassName: "link-star-wars",
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
  "3": {
    apiName: "PoKéMoN",
    apiImage: "images/pokemon.jpg",
    apiUrl: ERoutes.RYCKANDMORTY_VIEWS,
    apiClassName: "link-pokemon-font",
    apiDescription:
      "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales e intergalácticos. Fuente: Wikipedia",
  },
};

interface IFrikiWorldContext {
  apisData: IConfigApis;
  loadingView: Boolean;
  setLoadingView: (value: Boolean) => void;
}

interface IFrikiWorldProviderProps {
  children: ReactNode;
}

export const FrikiWorldContext = createContext<IFrikiWorldContext>({
  apisData,
  loadingView: false,
  setLoadingView: () => {},
});

export const FrikiWorldProvider: FC<IFrikiWorldProviderProps> = ({
  children,
}) => {
  const [loadingView, setLoadingView] = useState<Boolean>(false);

  return (
    <FrikiWorldContext.Provider
      value={{ apisData, loadingView, setLoadingView }}
    >
      {children}
    </FrikiWorldContext.Provider>
  );
};
