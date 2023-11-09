import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({theme, $isactive}) => $isactive === "true" ? theme.COLORS.PINK : theme.COLORS.GRAY_300};
  border: none;
  font-size: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`          