import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div:first-child {
    display: flex;
    flex-direction: column;

    align-content: center;
    width: 45%;
    height: 100vh;

    padding: 134px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};

      font-weight: 700;
      font-size: 48px;
      line-height: 63px;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      font-size: 14px;
      line-height: 18px;
    }

    > h2 {
      margin: 48px 0;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
    > a:last-child {
      margin-top: 42px;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
      line-height: 21px;
      align-self: center;
    }
  }
  > div:last-child {
    width: 55%;
    overflow: hidden;
    height: 100vh;
    > img {
      width: 100%;
      height: 100vh;
      object-fit: fill;
    }
  }
`;