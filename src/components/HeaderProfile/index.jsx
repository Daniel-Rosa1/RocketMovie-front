import {Container } from "./styles"

import {Buttontext} from "../Buttontext"
import { FiArrowLeft } from "react-icons/fi"

export function HeaderProfile(){

  return(
    <Container>
      
      <Buttontext to='/' title={"Voltar"} icon={FiArrowLeft}/>

      

    </Container>
  )

} 