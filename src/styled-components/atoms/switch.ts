import styled from "styled-components";

export const SwitchStyled = styled.button<{ right: string }>`
  background: hsl(213, 96%, 18%);
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
  width: 45px;
  height: 22px;
  margin: 0px 25px;
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    background: #f1f1f1;
    top: 3px;
    right: ${({ right }) => right};
    border-radius: 100px;
    transition: 0.3s ease all;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
