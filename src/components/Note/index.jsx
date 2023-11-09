import { Container, Tags, Stars } from "./styles";

import {Tag} from "../Tag"
import {Star} from "../Star"


export function Note({data, ...rest}){
  return(
    <Container>

      <h1>{data.title}</h1>

      
      {data.lenght?data.lenght =0 : <Star length={data.length}/>}
      

      

      <p>{data.discription}</p>

      <Tags>
        {data.tags && data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
      </Tags>
    </Container>
  )

}