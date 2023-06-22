import { useGlobalOptions } from "@/hooks";
import { AddOnsCardProps } from "@/interfaces";
import { toShortWord } from "@/utils";
import {
  ContainerAddOns,
  Checkbox,
  TextContainer,
  Price,
} from "@/styled-components";

const AddOnsCard = ({
  title,
  description,
  price,
  onClick,
}: AddOnsCardProps) => {
  const { modality } = useGlobalOptions();

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
        ${price}/ {toShortWord(modality)}
      </Price>
    </ContainerAddOns>
  );
};
export default AddOnsCard;
