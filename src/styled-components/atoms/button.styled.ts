import styled from "styled-components";

export const Regular = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 2.375rem;
  background-color: hsl(213, 96%, 18%);
  color: #fff;
  border: none;
  border-radius: .3125rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: hsl(243, 100%, 62%);
    font-weight: bolder;
  }
`;
export const Outline = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 2.375rem;
  background-color: #fff;
  cursor: pointer;
  transition: font-size 0.3s ease;
  border: none;
  &:hover {
    color: hsl(213, 96%, 18%);
    font-size: .9375rem;
    font-weight: bolder;
  }
`;
