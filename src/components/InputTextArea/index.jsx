import {Container} from "./styles"

export function InputTextArea({value, ...rest}){
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
} 