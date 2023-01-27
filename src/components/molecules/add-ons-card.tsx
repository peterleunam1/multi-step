import { useGlobalOptions } from "../../hooks";
import { AddOnsCardProps } from "../../interfaces";
import {
  ContainerAddOns,
  Checkbox,
  TextContainer,
  Price,
} from "../../styled-components";

const AddOnsCard = ({
  title,
  description,
  price,
  onClick,
}: AddOnsCardProps) => {
  const { mode } = useGlobalOptions();

  return (
    <ContainerAddOns>
      <span>
        <Checkbox type="checkbox" onClick={onClick} />
        <TextContainer>
          <h4>{title}</h4>
          <p>{description}</p>
        </TextContainer>
      </span>
      <Price>
        ${price}/{mode === "yearly" ? "yr" : "mo"}
      </Price>
    </ContainerAddOns>
  );
};
export default AddOnsCard;
