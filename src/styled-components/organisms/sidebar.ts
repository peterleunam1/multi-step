import styled from "styled-components";
import Bg  from "../../assets/bg-sidebar-desktop.svg"
export const Aside = styled.aside`
  height: 100%;
  width: 28%;
  background: url(${Bg}) no-repeat;
  background-position-y: 100%;
  border-radius: .625rem;
  
  @media (max-width: 500px) {
    width: 100%;
    height: 25vh;
    background-size: cover;
    background-position-y: 95%;
    border-radius: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 2.5rem;
  }
`;
