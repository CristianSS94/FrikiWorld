import { FC, ReactElement, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EpisodesSimpson } from "./views/episodes/EpisodesSimpson";

import "./SimpsonStyles.scss";
import { BotoneraSimpson } from "./components/botoneraSimpson/BotoneraSimpson";
import { CharactersSimpson } from "./views/characters/CharactersSimpson";

export type TKeySimpsonTab = "0" | "1";
export type TButtonActive = "Personajes" | "Episodios";

interface ITabSimpson {
  tabTitle: TButtonActive;
  tabComponent: ReactElement;
  eventKey: TKeySimpsonTab;
}

export interface IConfigTabSimpson
  extends Record<TKeySimpsonTab, ITabSimpson> {}

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

  const handleShowTab = (e: string) => {
    setShowTab(e);
  };

  return (
    <Container fluid className="contenedor-principal-TheSimpsonView">
      <Row>
        <BotoneraSimpson
          configTabSimpson={configTabSimpson}
          handleShowTab={handleShowTab}
        />
        <Col xs={12} lg={10}>
          {(Object.keys(configTabSimpson) as TKeySimpsonTab[]).map(
            (elem) =>
              showTab === configTabSimpson[elem].eventKey && (
                <section key={configTabSimpson[elem].eventKey}>
                  {configTabSimpson[elem].tabComponent}
                </section>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};
