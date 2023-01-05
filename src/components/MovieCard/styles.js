import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  &:hover {
    filter: brightness(1);
  }
  > div{
  width: 100%;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  padding: 32px;
  margin-top: 24px;


  > h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  > span{
    margin-top: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > p{
    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > div:last-child{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
  }
}
`;