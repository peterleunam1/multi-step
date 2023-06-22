import styled from "styled-components";

export const ThankContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3.125rem;
  span {
    position: relative;
    width: 22%;
    height: 13.5vh;
  }
  h1 {
    margin: 1.25rem 0 .3125rem 0;
  }
  p {
    font-size: .9375rem;
    color: hsl(231, 11%, 63%);
  }
`;
