import { CardProps } from "../../interfaces";
import { CardStyled } from "../../styled-components";
import { Icon } from "../../components";

const Card = ({ children, title, img, selected }: CardProps) => {
  return (
    <CardStyled select={selected}>
      <Icon url={img} alt={title}></Icon>
      <span>
        <h4>{title}</h4>
        <p>{children}</p>
      </span>
    </CardStyled>
  );
};
export default Card;
