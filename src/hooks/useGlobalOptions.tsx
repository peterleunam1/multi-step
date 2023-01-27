import { useContext } from "react";
import { ContextOptions } from "../context";

export default function useGlobalOptions() {
  const { mode, setMode, setInformation, information } =
    useContext(ContextOptions);
  return {
    mode,
    setMode,
    information,
    setInformation,
  };
}
