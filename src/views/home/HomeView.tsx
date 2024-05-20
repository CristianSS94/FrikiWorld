import { FC } from "react";
import { Container } from "react-bootstrap";

import "./Home.scss";
import { CardsHomeApis, WelcomeHome } from "./components";

export const HomeView: FC = () => {
  return (
    <Container fluid className="contenedor-principal-homeView">
      <WelcomeHome />
      <CardsHomeApis />
    </Container>
  );
};
