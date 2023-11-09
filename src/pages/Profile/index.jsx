import {Container, Content, Avatar} from "./styles"

import { FiMail, FiUser, FiLock, FiCamera } from "react-icons/fi"

import { HeaderProfile } from "../../components/HeaderProfile"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function Profile(){
  return (
    <Container>

      <HeaderProfile/>


      <Content>

        <Avatar>
          <img src="https://github.com/Daniel-Rosa1.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id="avatar" />
          </label>

        </Avatar>
        
        <div>
          <Input placeholder='name' icon={FiUser} />
          <Input placeholder='E-mail' icon={FiMail} />
        </div>

        <div>
          <Input placeholder='Senha atual' icon={FiLock} />
          <Input placeholder='Nova senha' icon={FiLock} />
        </div>

        <Button title={"Salvar"}/>

      </Content>
    </Container>
  )
}