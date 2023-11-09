import styled from "styled-components";

export const Container= styled.div`


  display: flex;

  background-color: ${({theme, isnew}) => isnew? `${theme.COLORS.BACKGROUND_900}` : `${theme.COLORS.BACKGROUND_700}`};

  padding: 1.6rem;

  border: ${({theme, isnew}) => isnew?`1px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  border-radius: 0.8rem;
  
  >button{
    border: none;
    background: none;
  }

  >input{ 
    width: 10rem;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.COLORS.WHITE};

    background: none;
    border: none;
  }

  .button-add{
    color: ${({theme}) => theme.COLORS.PINK};
  }
  
  .button-delete{
    color: ${({theme}) => theme.COLORS.PINK};
  }
` 