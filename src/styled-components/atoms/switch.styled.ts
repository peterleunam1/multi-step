import styled from "styled-components";

export const SwitchStyled = styled.button<{ right: string }>`

  background: hsl(213, 96%, 18%);
  border-radius: 62.5rem;
  border: none;
  position: relative;
  cursor: pointer;
  display: flex;
  outline: none;
  width: 2.8125rem;
  height: 1.375rem;
  margin: 0px 1.5625rem;

  &::after {
    content: "";
    display: block;
    width: .9375rem;
    height: .9375rem;
    position: absolute;
    background: #f1f1f1;
    top: .1875rem;
    right: ${({ right }) => right};
    border-radius: 100px;
    transition: 0.3s ease all;
    box-shadow: 0px 0px .125rem .125rem rgba(0, 0, 0, 0.2);
  }
`;
