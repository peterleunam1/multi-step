import { IconProps } from "@/interfaces";
import { IconStyled } from "@/styled-components/atoms";

const Icon = ({ url, alt }: IconProps) => {
  return <IconStyled src={url} alt={alt} />;
};
export default Icon;
