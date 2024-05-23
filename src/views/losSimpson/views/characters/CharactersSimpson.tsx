import { FC, useContext } from "react";
import { ColProps, Row } from "react-bootstrap";
import { SpinnerLoading } from "../../../../components";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import { SimpsonCards } from "./components/cardCharacterSimpson/SimpsonCards";
import { useCharacterSimpson } from "./hooks/useCharacterSimpson";

export const CharactersSimpson: FC = () => {
  const { configCharacterSpinner, characterSimpson } = useCharacterSimpson();
  const { loadingView } = useContext(FrikiWorldContext);
  // const configClassCards: ColProps = {
  //   colClass: { xs: 6, lg: 3 },
  // };

  return (
    <>
      {loadingView ? (
        <SpinnerLoading {...configCharacterSpinner} />
      ) : (
        <Row className="row-contenedor-personajes">
          {characterSimpson?.map((elem, index) => (
            <SimpsonCards key={index} elem={elem} /*{...configClassCards}*/ />
          ))}
        </Row>
      )}
    </>
  );
};
