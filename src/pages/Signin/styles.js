import styled from "styled-components";
import background from "../../assets/background.png"


export const Form = styled.form`

padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  >h1{
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 48px;
  }

  >p{
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 4.8rem;
  }

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 4.8rem ;

  }

  a{
    margin-top: 4.2rem;
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 1.6rem;
  }

` 

export const Container= styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Background= styled.div`
  flex: auto;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  filter: opacity(0.5);
`