import styled from "styled-components";

export const IndicatorStyled = styled.span<{ isActive?: boolean }>`
  width: 1.5625rem;
  height: 1.5625rem;
  color: ${({ isActive }) => (isActive ? "#000" : "hsl(215, 100%, 96%)")};
  border: 1px solid hsl(215, 100%, 96%);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? "hsl(215, 100%, 96%)" : "transparent"};
`;
