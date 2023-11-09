import {Container, Profile} from "./styles"

import { FiSearch} from "react-icons/fi"
import { Input } from "../Input"
import { Link } from "react-router-dom"


export function Header(){

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>

      
      <Profile>
        <div>
          <Link to="/profile">Daniel da Rosa</Link>
          <span>sair</span>
        </div>
        
        <Link to="/profile"><img src="https://github.com/Daniel-Rosa1.png" alt=" Foto do usuário" /></Link>
      </Profile>
    </Container>
  )

} 