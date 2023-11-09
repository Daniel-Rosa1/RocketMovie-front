import { createGlobalStyle} from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body, input, button, textarea{
    font-size: 1.6rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a{
    text-decoration: none;
  }



  button, a{
    cursor: pointer;
    font-family: 'Roboto Slab', serif;;
    &:hover{
      opacity: 0.9;
    }
  }
`