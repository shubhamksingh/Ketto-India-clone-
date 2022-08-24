import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvier = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
