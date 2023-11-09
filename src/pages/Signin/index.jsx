import {Container, Form, Background} from "./styles"
import {Link} from "react-router-dom"

import {FiMail, FiLock, FiPlus} from 'react-icons/fi'

import {Button} from "../../components/Button"
import {Input} from "../../components/Input"
import {Buttontext} from "../../components/Buttontext"


export function Signin() {


  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiMail} type="text" placeholder={"E-mail"}/>
        <Input icon={FiLock} type="password" placeholder={"Senha"}/>

        <Button title={"Entrar"}/>
      
        <Buttontext to="register" icon={FiPlus} title={"criar conta"} />
      </Form>


      <Background/>
    </Container>
  )
}

