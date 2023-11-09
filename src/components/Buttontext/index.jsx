import {Container} from "./styles"

export function Buttontext({icon: Icon ,title, isActive = false ,...rest}){
  return(
    <Container
      type="button"
      $isactive = {isActive.toString()}
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}