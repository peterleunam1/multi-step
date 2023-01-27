import styled from "styled-components";

export const ThankContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
  span {
    position: relative;
    width: 22%;
    height: 13.5vh;
  }
  h1 {
    margin: 20px 0 5px 0;
  }
  p {
    font-size: 15px;
    color: hsl(231, 11%, 63%);
  }
`;
