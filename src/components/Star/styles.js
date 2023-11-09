import styled from "styled-components";

export const Container = styled.div`


>ul{
    display: flex;
    gap:.8rem;
    list-style: none;
    color: ${({theme}) =>theme.COLORS.PINK};
  }

  .active{
    color: ${({theme}) =>theme.COLORS.PINK};
  }
`