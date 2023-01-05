import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;

export const RocketMovies = styled(Link)`

  flex: 1;
  align-self: center;
  
  text-decoration: none;

  color: ${({ theme }) => theme.COLORS.PINK};  

  font-size: 24px;
  line-height: 32px;
  font-weight: 700;

  
`;

export const Search = styled.div`
  align-self: center;
  flex: 3;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  text-decoration: none;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-left: 9px;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 18px;
    > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    font-weight: 700;
    align-self: flex-end;
  }
  span {
    font-size: 14px;
    align-self: flex-end;
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }
  }


`;