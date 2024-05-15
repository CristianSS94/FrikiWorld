import { FC } from "react";
import { EpisodesSimpson } from "./views/episodes/EpisodesSimpson";
import { Container } from "react-bootstrap";

export const SimpsonContainer: FC = () => {
  return (
    <Container fluid className="contenedor-principal-TheSimpsonView">
      <EpisodesSimpson />
    </Container>
  );
};
