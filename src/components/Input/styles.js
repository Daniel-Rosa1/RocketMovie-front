import styled from "styled-components";

export const Container= styled.div`
  width: 100%;
  margin-bottom: .8rem;
  border-radius: 1rem;
  
  display: flex;
  justify-content: center;
  align-items:center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  
  >input{
    width: 100%;
    height:5.6rem ;

    padding: 1.2rem;
    
    color:${({theme}) => theme.COLORS.WHITE} ;
    background-color: transparent;
    border: none;
    
    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  >svg{
    margin-left: 1.6rem;
  }


`