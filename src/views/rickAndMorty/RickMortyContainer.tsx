import { FC } from "react";

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
