import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 144px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding-left: 144px;
`;

export const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;
  > div:first-child{
  align-self: center;
  justify-self: center;
  width: 340px;
  }
`;

export const Picture = styled.div`
  height: 1px;

  > div {
    top: 51px;
    left: 44.5%;
    width: 186px;
    height: 186px;
    position: absolute;
    > img {
      display: flex;
      align-self: center;
      width: 186px;
      height: 186px;
      border-radius: 50%;
    }
    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 48px;
      height: 48px;

      right: 10px;
      bottom: 10px;
      position: absolute;

      border-radius: 50%;
      background-color: ${({ theme }) => theme.COLORS.PINK};

      cursor: pointer;
      > svg {
        color: ${({ theme }) => theme.COLORS.BLACK};
      }
    }
  }

`;