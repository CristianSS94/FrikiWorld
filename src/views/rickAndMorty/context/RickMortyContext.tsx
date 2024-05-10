import { FC, ReactNode, createContext, useState } from "react";

interface IRickMortyContextProps {
  loadingCharacter: Boolean;
  setLoadingCharacter: (value: Boolean) => void;
}

interface IRickMortyProviderProps {
  children: ReactNode;
}

export const RickMortyContext = createContext<IRickMortyContextProps>({
  loadingCharacter: false,
  setLoadingCharacter: () => {},
});

export const RickMortyProvider: FC<IRickMortyProviderProps> = ({
  children,
}) => {
  const [loadingCharacter, setLoadingCharacter] = useState<Boolean>(false);

  return (
    <RickMortyContext.Provider
      value={{ loadingCharacter, setLoadingCharacter }}
    >
      {children}
    </RickMortyContext.Provider>
  );
};
