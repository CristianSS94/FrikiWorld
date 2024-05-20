import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FooterLayout, NavbarLayout } from "../layout";
import { ERoutes } from "../models/enums/Common-routes";
import {
  HomeView,
  PokemonContainer,
  RickMortyContainer,
  SimpsonContainer,
  StarWarsContainer,
} from "../views";

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
