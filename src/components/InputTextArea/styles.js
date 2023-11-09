import styled from "styled-components";

export const Container= styled.textarea`
  width: 100%;
  height: 27.4rem;
  resize: none;

  border-radius: 1rem;
  border: none;
  padding: 1.9rem;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};
    
  &:placeholder{
  color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`