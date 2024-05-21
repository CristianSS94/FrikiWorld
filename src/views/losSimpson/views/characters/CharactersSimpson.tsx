import React, { FC } from "react";
import { useCharacterSimpson } from "./hooks/useCharacterSimpson";

export const CharactersSimpson: FC = () => {
  const { simpsonCharacter } = useCharacterSimpson();
  console.log(simpsonCharacter);
  return <div>CharactersSimpson</div>;
};
