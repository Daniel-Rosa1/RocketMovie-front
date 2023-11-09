import { Container, Content, Form } from "./styles";
import { FiArrowLeft} from "react-icons/fi"

import {Header} from "../../components/Header"
import {Buttontext} from "../../components/Buttontext"
import {Input} from "../../components/Input"
import { InputTextArea } from "../../components/InputTextArea";
import { Section } from "../../components/Section";
import { Noteitem } from "../../components/Noteitem";
import { Button } from "../../components/Button";

export function Createmovie(){
  return(
    <Container>

      <Header/>


      <Content>
        <Buttontext to="/" title={"voltar"} icon={FiArrowLeft} isActive={true}></Buttontext>
      
        <Form>

          <h2>Novo filme</h2>
          <div>
            <Input placeholder='Título'/>
            <Input placeholder='Sua noat (de 0 a 5)'/>
          </div>

          <InputTextArea placeholder='Observações'/>

          <Section title={"Marcadores"}>
            <Noteitem value="react" isnew={false}></Noteitem>
            <Noteitem  isnew={true} ></Noteitem>

          </Section>

          <div>
            <Button title={"Excluir filme"} isNew ={'false'} />
            <Button title={"Salvar filme"} />
          </div>

        </Form>
      
      </Content>

    </Container>
  )
}