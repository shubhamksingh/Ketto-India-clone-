import { createContext, useReducer } from "react";
import { reducer, INITIAL_STATE } from "./reducer";
export const AppContext = createContext();

export const AppContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};
