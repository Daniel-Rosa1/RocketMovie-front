import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
  position: fixed;  
  grid-area: header;
  width: 100%;
 
  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  gap: 6.4rem;
  align-items: center;
  
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  >h1{
    color: ${({theme}) => theme.COLORS.PINK};
    
  }



`

export const Profile= styled.div`
  
    flex-shrink: 0;

    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    text-align: end;

    div{
      display: flex;
      flex-direction: column;
    }

    a{

      width: fit-content;
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.WHITE};
      font-weight: 700;
    }

    span{
      font-size: 1.4rem;
      color: ${({theme}) => theme.COLORS.GRAY_300};
      font-weight: 400;
    }

    img{
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50% ;
    }
  


`