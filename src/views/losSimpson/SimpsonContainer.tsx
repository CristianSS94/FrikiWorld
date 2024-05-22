import { FC, ReactElement, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { EpisodesSimpson } from "./views/episodes/EpisodesSimpson";

import "./SimpsonStyles.scss";
import { CharactersSimpson } from "./views/characters/CharactersSimpson";

type TKeySimpsonTab = "0" | "1";

interface ITabSimpson {
  tabTitle: string;
  tabComponent: ReactElement;
  eventKey: TKeySimpsonTab;
}

interface IConfigTabSimpson extends Record<TKeySimpsonTab, ITabSimpson> {}

export const SimpsonContainer: FC = () => {
  const [showTab, setShowTab] = useState("0");

  const configTabSimpson: IConfigTabSimpson = {
    "0": {
      tabTitle: "Personajes",
      tabComponent: <CharactersSimpson />,
      eventKey: "0",
    },
    "1": {
      tabTitle: "Episodios",
      tabComponent: <EpisodesSimpson />,
      eventKey: "1",
    },
  };

  return (
    <Container fluid className="contenedor-principal-TheSimpsonView">
      <Row>
        <Col xs={12} lg={2} className="col-botonera-simpson">
          {(Object.keys(configTabSimpson) as TKeySimpsonTab[]).map((elem) => (
            <Button onClick={() => setShowTab(configTabSimpson[elem].eventKey)}>
              {configTabSimpson[elem].tabTitle}
            </Button>
          ))}
        </Col>
        <Col xs={12} lg={10}>
          {(Object.keys(configTabSimpson) as TKeySimpsonTab[]).map(
            (elem) =>
              showTab === configTabSimpson[elem].eventKey && (
                <>{configTabSimpson[elem].tabComponent}</>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};
