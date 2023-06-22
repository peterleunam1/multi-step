import styled from "styled-components";

export const AlertStyled = styled.span<{ visibility: string }>`
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  background-color: hsl(354, 84%, 57%);
  border-radius: .3125rem;
  padding: .3125rem .625rem;
  text-align: center;
  color: #fff;
  visibility: ${(props) => props.visibility};
  transition: visibility 0.5s ease;
`;
