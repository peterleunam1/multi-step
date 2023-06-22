import styled from "styled-components";

export const OptionsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5625rem;
  margin-left: 1.125rem;
  padding-top: 1.875rem;

  @media (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
    padding-top: 0;
    height: 30px;
  }
`;

export const OptionStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: .5rem;
    font-size: .75rem;
    color: hsl(215, 100%, 96%);
    @media (max-width: 500px) {
      display: none;
    }
    p,
    strong {
      margin: 0;
      letter-spacing: .05rem;
      text-transform: uppercase;
    }
  }
`;
