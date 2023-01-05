import styled from "styled-components";

export const Container = styled.div`
  
  > h1 {
    margin-top: 24px;

    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }

  > div:first-child {
    margin-top: 0px;
  }

  > div {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  > p {
    font-size: 20px;
    line-height: 26px;
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const TextArea = styled.div`
  margin-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  height: 274px;
  padding: 19px 16px;

  > textarea{
    width: 100%;
    resize: none;
    outline: none;

    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

export const Markers = styled.div`

  margin-top: 24px;

  width: 100%;
  height: 88px;
  padding: 16px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  display: flex;
  flex-direction: row;

  gap: 24px;
  
`;

export const Tag = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};


  display: flex;
  flex-direction: row;

  padding: 20px 16px;
  border-radius: 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;

  > svg {
    cursor: pointer;
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const TagOutline = styled.div`
  background-color: transparent;

  border-width: 1;
  border-style: dashed;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};

  display: flex;
  flex-direction: row;


  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;

  > svg {
    cursor: pointer;
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const ButtonBlack = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PINK};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

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
    opacity: 0.5;
  }
`;