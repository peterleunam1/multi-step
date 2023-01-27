import styled from "styled-components";

export const AlertS = styled.span<{ visibility: boolean }>`
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  background-color: hsl(354, 84%, 57%);
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  color: #fff;
  visibility: ${(props) => (props.visibility ? "normal" : "hidden")};
  transition: visibility 0.5s ease;
`;
