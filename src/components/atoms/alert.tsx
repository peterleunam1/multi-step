import { AlertProps } from "../../interfaces";
import { AlertS } from "../../styled-components";

const Alert = ({ vibility, text }: AlertProps) => {
  return <AlertS visibility={vibility}>{text}</AlertS>;
};

export default Alert;
