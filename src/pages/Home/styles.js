import styled from "styled-components";

export const Content = styled.div`
overflow-y: hidden;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  
  > h2 {
    font-size: 32px;
    line-height: 42px;
  }
  > div:first-child {
    margin-top: 10px;
    align-self: center;
  }
`;

export const Catalog = styled.div`
  margin-top: 16px;
  overflow-y: visible;
  grid-area: content;
`;