import React, { useState } from "react";
import {
  OptionsContextProps,
  OptionsContextProviderProps,
} from "../interfaces";
import { PlanProps } from "../interfaces/context/OptionsContext";

const ContextOptions = React.createContext<OptionsContextProps>({
  setMode(value) {},
  setInformation(value) {},
});

export function OptionsContextProvider({
  children,
}: OptionsContextProviderProps) {
  const [mode, setMode] = useState("");
  const [information, setInformation] = useState<PlanProps>();

  return (
    <ContextOptions.Provider
      value={{ mode, setMode, information, setInformation }}
    >
      {children}
    </ContextOptions.Provider>
  );
}

export default ContextOptions;
