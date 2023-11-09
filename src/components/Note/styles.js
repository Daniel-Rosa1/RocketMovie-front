import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  width: 100%;
  padding: 3.2rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;


  background-color: ${({theme}) =>theme.COLORS.BACKGROUND_PINK};

  >h1{
    color: ${({theme}) =>theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 700;
  }

  >svg{
    width: 1.2rem;
    height: 1.2rem;
    color: ${({theme}) =>theme.COLORS.PINK};
  }

  p{
    color: ${({theme}) =>theme.COLORS.GRAY_300};
    font-size: 1.6rem;
    text-overflow: ellipsis;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

`

export const Tags= styled.div`
  display: flex;
  gap: .8rem;
`

export const Stars= styled.div`
  display: flex;
  gap: .8rem;
`