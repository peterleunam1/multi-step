import { OptionStyled } from "../../styled-components";
import { Indicator } from "../../components";
import { OptionProps } from "../../interfaces";

export const Option = ({ description, step, isActive }: OptionProps) => {
  return (
    <OptionStyled>
      <Indicator value={step} isActive={isActive} />
      <div>
        <strong>STEP {step} </strong>
        <p>{description}</p>
      </div>
    </OptionStyled>
  );
};

export default Option;
