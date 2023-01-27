import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: hsl(217, 100%, 97%);
  border-radius: 5px;
  margin-top: 10px;
  padding-bottom: 18px;

  tr {
    width: 100%;
  }
`;

export const Text = styled.p<{ decoration?: string }>`
  margin: 0;
  padding: 0;
  color: hsl(231, 11%, 63%);
  font-weight: lighter;
  text-decoration: ${(props) => props.decoration || "none"};
  cursor: pointer;
  font-size: 14px;
`;

export const Th = styled.th<{ text_align?: string }>`
  padding: 20px;
  text-align: ${(props) => props.text_align || "left"};
  width: 100%;
  strong {
    margin: 0;
    padding: 0;
    color: hsl(213, 96%, 18%);
    font-weight: bold;
  }
`;

export const Td = styled.td<{ text_align?: string }>`
  padding: 8px 20px 8px 20px;
  text-align: ${(props) => props.text_align || "left"};
  width: 100%;
  strong {
    margin: 0;
    padding: 0;
    color: hsl(213, 96%, 18%);
    font-weight: 500;
    font-size: 13px;
  }
`;

export const Total = styled.article`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-top: 18px;
  strong {
    color: hsl(243, 100%, 62%);
    font-size: 18px;
  }
`;
