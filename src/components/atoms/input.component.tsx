import { InputProps } from "@/interfaces";
import { Label, InputStyled } from "@/styled-components/atoms";

export const Input = ({
  label,
  placeholder,
  type,
  onChange,
  name,
  isEmpty,
}: InputProps) => {
  return (
    <Label>
      <span>
        {label}
        {isEmpty && <p> This field is requered.</p>}
      </span>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        isEmpty={isEmpty}
      />
    </Label>
  );
};

export default Input;
