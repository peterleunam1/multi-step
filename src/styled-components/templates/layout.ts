import styled from "styled-components";

export const Layout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(215, 100%, 96%);

  section {
    width: 58%;
    height: 65vh;
    background-color: hsl(231, 100%, 99%);
    border-radius: 5px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-color: hsl(215, 100%, 96%);

      padding: 0;
    }
  }
`;
