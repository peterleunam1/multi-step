import styled from "styled-components";

export const InputStyled = styled.input<{ isEmpty?: boolean }>`
  width: 95%;
  height: 30px;
  border: ${(props) =>
    props.isEmpty
      ? "1px solid hsl(354, 84%, 57%)"
      : "1px solid hsl(231, 11%, 63%)"};
  border-radius: .3125rem;
  padding: .25rem .625rem;
  font-weight: 500;
  color: hsl(213, 96%, 18%);
  outline: none;
  transition: all 0.3s ease-in-out;
  margin: 0;
  &:focus {
    border: .0625rem solid hsl(213, 96%, 18%);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.125rem;

  span {
    font-size: .875rem;
    font-weight: 500;
    color: hsl(213, 96%, 18%);
    margin: 0 0 .3125rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  p {
    color: hsl(354, 84%, 57%);
    font-weight: 500;
    margin: 0;
  }
`;
