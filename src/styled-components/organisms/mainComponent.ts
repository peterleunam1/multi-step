import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 72%;
  @media (max-width: 500px) {
    width: 90%;
    position: absolute;
    top: 17%;
    z-index: 1;
    background-color: #fff;
    border-radius: .9375rem;
    height: calc(60vh - 1.25rem);
    justify-content: flex-start;
    padding: 1.25rem 0px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 74%;

  @media (max-width: 500px) {
    width: 90%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: .9375rem 0 0 0;
    padding: 0;
    color: hsl(213, 96%, 18%);
  }
  p {
    font-weight: 400;
    margin: .625rem 0 1.875rem 0;
    padding: 0;
    color: hsl(231, 11%, 63%);
    font-size: .9375rem;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

export const Information = styled.div<{ justify?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justify || "center"};
  width: 74%;
  height: 35vh;
  @media (max-width: 500px) {
    width: 90%;
    justify-content: flex-start;
  }
`;

export const BarButton = styled.span<{ justify?: string }>`
  width: 74%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  margin-top: 2.5rem;
  @media (max-width: 500px) {
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    height: 10vh;
  }
`;
