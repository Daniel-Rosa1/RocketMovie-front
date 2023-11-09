import styled from "styled-components";


export const Container= styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 12rem auto;
grid-template-areas: "header" "content" ;
`

export const Content =styled.div`
  grid-area: content;

  
  display: flex;
  gap: 3rem;
  align-items: baseline;

  flex-direction: column;

  padding:  2rem  10rem 4rem  10rem;

  
`

export  const Form = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 4rem;

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 3.6rem;
    font-weight: 500;
  }

  >div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 4rem;
  }

`                 