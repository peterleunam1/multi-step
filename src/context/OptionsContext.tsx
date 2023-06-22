import React, { useState } from "react";
import {
  OptionsContextProps,
  OptionsContextProviderProps,
} from "@/interfaces";
import { PlanProps } from "../interfaces/context/OptionsContext";

const ContextOptions = React.createContext<OptionsContextProps>({
  modality: '',
  setModality(value) {},
  setInformation(value) {},
});

export function OptionsContextProvider({
  children,
}: OptionsContextProviderProps) {
  const [modality, setModality] = useState<string>('');
  const [information, setInformation] = useState<PlanProps>();

  return (
    <ContextOptions.Provider
      value={{ modality, setModality, information, setInformation }}
    >
      {children}
    </ContextOptions.Provider>
  );
}

export default ContextOptions;
