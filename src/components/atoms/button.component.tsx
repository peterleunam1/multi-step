import { FC } from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "@/interfaces";
import { Outline, Regular } from "@/styled-components/atoms";

const Button: FC<ButtonProps> = ({ width, type, path, onClick, text }) => {
  return (
    <>
      {type === "regular" ? (
        <Regular width={width} onClick={onClick}>
          {text}
        </Regular>
      ) : (
        <Link to={path || ''}>
          <Outline width={width}>Go Back</Outline>
        </Link>
      )}
    </>
  );
};
export default Button;
