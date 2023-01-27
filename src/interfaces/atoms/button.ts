export interface ButtonProps {
  type: "regular" | "outline";
  width: string;
  path?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
