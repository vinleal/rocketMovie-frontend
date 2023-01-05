import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MovieInfo = styled.div`
  margin-top: 24px;
  flex-direction: row;
  > div:first-child {
    display: flex;
    flex-direction: row;
    gap:19px;
    margin-bottom: 24px;
    > h2 {
      font-size: 36px;
      font-weight: 500;
      line-height: 47px;
    }
    > span {
      align-self: center;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
  > div:last-child {
    margin-bottom: 24px;
    display: flex;
    gap: 8px;

    > div {
    flex-direction: row;
      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
      }
      > svg {
        margin-right: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`;

export const Tags = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

export const Description = styled.div`
  margin-top: 40px;

  text-align: justify;

  line-height: 21px;
`;