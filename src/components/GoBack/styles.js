import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  justify-content: center;

  > a {
    width: 68px;
    height: 21px;

    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    background: none;
    border: none;

    align-content: space-between;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`;