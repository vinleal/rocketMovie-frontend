import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-top: 8px;
  gap: 8px;

  > svg {
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;