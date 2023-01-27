import styled from "styled-components";

export const Aside = styled.aside`
  height: 100%;
  width: 28%;
  background: url("/src/assets/bg-sidebar-desktop.svg") no-repeat;
  background-position-y: 100%;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 100%;
    height: 25vh;
    background-size: cover;
    background-position-y: 95%;
    border-radius: 0px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 40px;
  }
`;
