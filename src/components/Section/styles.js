import styled from "styled-components";

export const Container= styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  >h2{
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: 2rem;
    font-weight: 400;
  }

  >div{
    display: flex;
    gap: 2.4rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: 8px;

  }


`