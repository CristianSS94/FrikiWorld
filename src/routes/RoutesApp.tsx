import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FooterLayout, NavbarLayout } from "../layout";
import { ERoutes } from "../models/enums/Common-routes";
import { HomeView, RickMortyContainer } from "../views";
import { SimpsonContainer } from "../views/losSimpson/SimpsonContainer";
import { StarWarsContainer } from "../views/starWars/StarWarsContainer";
import { PokemonContainer } from "../views/pokemon/PokemonContainer";

export const RoutesApp: FC = () => {
  return (
    <BrowserRouter>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Routes>
          <Route path={ERoutes.HOME} element={<HomeView />} />
          <Route
            path={ERoutes.RYCKANDMORTY_VIEWS}
            element={<RickMortyContainer />}
          />
          <Route path={ERoutes.SIMPSON_VIEWS} element={<SimpsonContainer />} />
          <Route
            path={ERoutes.STARWARS_VIEWS}
            element={<StarWarsContainer />}
          />
          <Route path={ERoutes.POKEMON_VIEWS} element={<PokemonContainer />} />
        </Routes>
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </BrowserRouter>
  );
};
