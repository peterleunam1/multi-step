export interface OptionsContextProviderProps {
  children: React.ReactNode;
}
export interface PlanProps {
  mode: string;
  price: string;
}
export interface OptionsContextProps {
  modality: string;
  setModality: (value: string) => void;
  information?: PlanProps;
  setInformation: (value: PlanProps) => void;
}
