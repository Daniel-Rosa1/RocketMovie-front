import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container =  styled(Link)`
  width: 100%;
  height: 5.6rem;
  padding: 1.4rem 3.2rem;
 

  border: none;
  border-radius: 1rem ;
  background-color: ${({theme, $isnew}) => $isnew? `${theme.COLORS.PINK}`: `${theme.COLORS.BACKGROUND_900}`};

  color: ${({theme, $isnew}) => $isnew? `${theme.COLORS.BACKGROUND_900}`: `${theme.COLORS.PINK}`};
  font-size: 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  white-space: nowrap;

`