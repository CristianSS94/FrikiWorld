import { FC, useState } from "react";
import { Button, Col } from "react-bootstrap";

import {
  IConfigTabSimpson,
  TButtonActive,
  TKeySimpsonTab,
} from "../../SimpsonContainer";

interface IBotoneraProps {
  configTabSimpson: IConfigTabSimpson;
  handleShowTab: (e: string) => void;
}

export const BotoneraSimpson: FC<IBotoneraProps> = ({
  configTabSimpson,
  handleShowTab,
}) => {
  const [buttonActive, setButtonAtive] = useState<TButtonActive>("Personajes");

  const handleButtonActive = (e: TButtonActive) => {
    setButtonAtive(e);
  };

  return (
    <Col xs={12} lg={2} className="col-botonera-simpson">
      {(Object.keys(configTabSimpson) as TKeySimpsonTab[]).map((elem) => (
        <Button
          className={`boton-vista-simpson
            ${
              buttonActive === configTabSimpson[elem].tabTitle
                ? "boton-activado-simpson"
                : null
            }`}
          key={configTabSimpson[elem].eventKey}
          onClick={() => {
            handleShowTab(configTabSimpson[elem].eventKey);
            handleButtonActive(configTabSimpson[elem].tabTitle);
          }}
        >
          {configTabSimpson[elem].tabTitle}
        </Button>
      ))}
    </Col>
  );
};
