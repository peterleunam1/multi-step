import styled from "styled-components";

export const CardStyled = styled.article<{ select: boolean }>`
  width: calc(30% - 10px);
  height: 22vh;
  border-radius: .3125rem;
  position: relative;
  border: .0625rem solid
    ${({ select }) => (select ? "hsl(243, 100%, 62%)" : "hsl(229, 24%, 87%)")};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 0px .625rem .625rem;
  cursor: pointer;
  background-color: ${({ select }) =>
    select ? "hsl(217, 100%, 97%)" : "transparent"};

  &:hover {
    border: .0625rem solid hsl(213, 96%, 18%);
  }

  span {
    width: 100%;
    text-align: left;
    h4 {
      margin: 0;
      color: hsl(213, 96%, 18%);
      font-weight: 500;
    }
    p {
      margin: 0;
      color: hsl(229, 8%, 60%);
      font-size: 0.8rem;
      margin: .3125rem 0px;
    }
  }
`;
