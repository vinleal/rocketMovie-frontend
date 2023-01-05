import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;

  justify-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;