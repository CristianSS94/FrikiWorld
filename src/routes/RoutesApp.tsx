import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FooterApp, NavbarLayout } from "../layout";
import { ERoutes } from "../models/enums/Common-routes";
import { HomeView, RickMortyContainer } from "../views";
import { RickMortyLanding } from "../views/rickAndMorty/views/landing/RickMortyLanding";

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
            path={ERoutes.RYCKANDMORTY_LANDING}
            element={<RickMortyLanding />}
          />
          <Route
            path={ERoutes.RYCKANDMORTY_VIEWS}
            element={<RickMortyContainer />}
          />
        </Routes>
      </main>
      <footer>
        <FooterApp />
      </footer>
    </BrowserRouter>
  );
};
