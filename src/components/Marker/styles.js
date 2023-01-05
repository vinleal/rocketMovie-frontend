import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"}; 

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border-radius: 10px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;

  > p {
    color: ${({ theme, isNew }) => isNew ?  theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  }

  > button {
    margin-left: 16px;
    border: none;
    background: none;
    > svg{
      color: ${({ theme }) => theme.COLORS.PINK} ;
    }
  }

  > input {
    
    background: none;
    border:none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
  }

`;