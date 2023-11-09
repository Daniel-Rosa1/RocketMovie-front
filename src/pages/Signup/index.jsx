import {Container, Form, Background} from "./styles"


import {FiMail, FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'

import {Button} from "../../components/Button"
import {Input} from "../../components/Input"
import {Buttontext} from "../../components/Buttontext"


export function Signup() {


  return (
    <Container>
      <Background/>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} type="text" placeholder={"Nome"}/>
        <Input icon={FiMail} type="text" placeholder={"E-mail"}/>
        <Input icon={FiLock} type="password" placeholder={"Senha"}/>

        <Button title={"Cadastrar"}/>
      
        <Buttontext to="/" icon={FiArrowLeft} title={"Voltar para login"}></Buttontext>
      </Form>


    </Container>
  )
}

