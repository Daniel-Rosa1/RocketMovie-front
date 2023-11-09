import {Container} from "./styles"

export function Button({icon: Icon ,title, loading = false, isNew,...rest}) {
  return (
    <Container 
      type="button"
      disabled={loading}
      $isnew= {!isNew}
      {...rest}
    >
      {Icon && <Icon size={20}/>}
      {loading? "carregando": title}      

    </Container>
  )
}