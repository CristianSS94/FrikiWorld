import { FC } from "react";

import "./RickMortyView.scss";
import { RickMortyProvider } from "./context/RickMortyContext";
import { RickMortyViews } from "./views/RickMortyViews";

export const RickMortyContainer: FC = () => {
  return (
    <RickMortyProvider>
      <RickMortyViews />
      {/* <RickMortyLanding /> */}
    </RickMortyProvider>
  );
};
