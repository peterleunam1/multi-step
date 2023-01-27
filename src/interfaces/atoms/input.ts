export interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  isEmpty?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
