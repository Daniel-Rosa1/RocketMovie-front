import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";

  >header{
    
      h1{
        font-size: 2.4rem;
      }
    }

    h2{
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.WHITE};
      width: 400%;
    
  }

`

export const Title = styled.div`
  grid-area: content;
  max-width: 100vw;

  margin: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  >h2{
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

`

export const Content = styled.div`
  grid-area: content;
  max-width: 100vw;

  padding: 4rem 11rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  overflow-y: auto;
  

`