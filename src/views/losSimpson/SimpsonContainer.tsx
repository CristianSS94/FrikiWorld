import { FC, ReactElement, useState } from "react";
import { EpisodesSimpson } from "./views/episodes/EpisodesSimpson";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";

import "./SimpsonStyles.scss";
import { CharactersSimpson } from "./views/characters/CharactersSimpson";

type TKeySimpsonTab = "0" | "1" | "2";

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
    "2": {
      tabTitle: "Productos",
      tabComponent: <CharactersSimpson />,
      eventKey: "2",
    },
  };

  return (
    <Container fluid className="contenedor-principal-TheSimpsonView">
      <Row>
        <Col xs={12} sm={1} className="col-botonera-simpson">
          {(Object.keys(configTabSimpson) as TKeySimpsonTab[]).map((elem) => (
            <Button onClick={() => setShowTab(configTabSimpson[elem].eventKey)}>
              {configTabSimpson[elem].tabTitle}
            </Button>
          ))}
        </Col>
        <Col xs={12} sm={11}>
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
