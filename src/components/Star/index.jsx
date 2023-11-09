import { Container} from "./styles";

import { AiFillStar, AiOutlineStar } from "react-icons/ai"


export function Star({length = 0}){
  const array = [1, 2, 3, 4, 5]
  
  return(
    <Container>
      <ul>
      {array.map((item, index) => index < length 
        ?  <li key={index}><AiFillStar className="active"  /></li>
        :  <li key={index}><AiOutlineStar /></li>
      )}
      
      </ul>
    </Container>
  )

}