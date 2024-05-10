import { FC, ReactElement } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import { CharacterView, EpisodeView, LocationView } from "./tabs";

type TKeyConfigTab = "0" | "1" | "2";

interface ITabPanel {
  tabTitle: string;
  component: ReactElement;
}

interface IConfigTab extends Record<TKeyConfigTab, ITabPanel> {}

export const RickMortyViews: FC = () => {
  const configTab: IConfigTab = {
    "0": { tabTitle: "Personajes", component: <CharacterView /> },
    "1": { tabTitle: "Episodios", component: <EpisodeView /> },
    "2": { tabTitle: "Ubicaciones", component: <LocationView /> },
  };

  return (
    <Container fluid className="contenedor-principal-RickMortyView">
      <Tabs
        id="controlled-tab-example"
        className="mb-2 pt-2"
        defaultActiveKey={configTab[0].tabTitle}
      >
        {(Object.keys(configTab) as TKeyConfigTab[]).map((elem) => {
          return (
            <Tab
              className="tab-personajes-estilos"
              key={elem}
              eventKey={configTab[elem].tabTitle}
              title={configTab[elem].tabTitle}
            >
              {configTab[elem].component}
            </Tab>
          );
        })}
      </Tabs>
    </Container>
  );
};
