import { FC, ReactNode, createContext, useState } from "react";

interface IFrikiWorldContext {
  loadingView: Boolean;
  setLoadingView: (value: Boolean) => void;
}

interface IFrikiWorldProviderProps {
  children: ReactNode;
}

export const FrikiWorldContext = createContext<IFrikiWorldContext>({
  loadingView: false,
  setLoadingView: () => {},
});

export const FrikiWorldProvider: FC<IFrikiWorldProviderProps> = ({
  children,
}) => {
  const [loadingView, setLoadingView] = useState<Boolean>(false);

  return (
    <FrikiWorldContext.Provider value={{ loadingView, setLoadingView }}>
      {children}
    </FrikiWorldContext.Provider>
  );
};
