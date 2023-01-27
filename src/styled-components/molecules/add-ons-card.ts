import styled from "styled-components";

export const ContainerAddOns = styled.article`
  width: 100%;
  border-radius: 5px;
  border: 1px solid hsl(229, 24%, 87%);
  height: 30%;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
  }
  @media (max-width: 500px) {
    width: 88%;
  }
`;
export const Checkbox = styled.input`
  width: 17px;
  height: 17px;
  margin-right: 20px;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h4 {
    margin: 0;
    color: hsl(213, 96%, 18%);
    font-weight: 500;
  }
  p {
    margin: 3px 0 0 0;
    font-size: 14px;
    color: hsl(231, 11%, 63%);
  }
`;
export const Price = styled.p`
  color: hsl(243, 100%, 62%);
  font-size: 14px;
`;
