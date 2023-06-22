import { useContext } from "react";
import { ContextOptions } from "../context";

export default function useGlobalOptions() {
  const { modality, setModality, setInformation, information } =
    useContext(ContextOptions);
  return {
    modality,
    setModality,
    information,
    setInformation,
  };
}
