import { IconProps } from "../../interfaces";
import { IconStyled } from "../../styled-components";

const Icon = ({ url, alt }: IconProps) => {
  return <IconStyled src={url} alt={alt} />;
};
export default Icon;
