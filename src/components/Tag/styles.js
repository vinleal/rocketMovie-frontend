import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 8px;

  align-content: center;
  justify-content: center;

  color: ${({ theme}) => theme.COLORS.WHITE};

  font-family: 'Roboto', sans-serif;
  line-height: 14px;
  font-size: 12px;
`;