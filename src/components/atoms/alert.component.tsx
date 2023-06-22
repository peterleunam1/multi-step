import { AlertProps } from "@/interfaces";
import { AlertStyled } from "@/styled-components/atoms";

const Alert = ({ vibility, text }: AlertProps) => {
  return (
    <AlertStyled visibility={vibility ? "normal" : "hidden"}>
      {text}
    </AlertStyled>
  );
};

export default Alert;
