import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: "header" "content";

`

export const Content= styled.div`
  width: 100%;
  height: 100%;

  grid-area: content;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;


  >div, button{
    width: 32rem;
  }
`

export const Avatar=styled.div`

  position: relative;
  margin: -35rem auto 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >img{
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
 
  >label{
    width: 4.8rem ;
    height: 4.8rem;

    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 7px;
    right: 7rem;

    
    cursor: pointer;
    
    input{
      display: none;
    }
  }


`