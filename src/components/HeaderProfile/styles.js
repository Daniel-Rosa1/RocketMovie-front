import styled from "styled-components";


export const Container = styled.header`
  position: fixed;  
  grid-area: header;
  width: 100%;
  height: 14.4rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_PINK};

  display: flex;
  align-items: center;
  
  padding: 0 17rem ;

`


