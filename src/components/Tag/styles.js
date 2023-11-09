import styled from "styled-components";

export const Container= styled.div`
  width: fit-content;
  padding: .5rem 1.6rem;
  border-radius: 0.8rem;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
  color: ${({theme}) => theme.COLORS.GRAY_100};
` 