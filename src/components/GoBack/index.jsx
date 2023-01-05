import { Container } from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export function GoBack({ target }) {
  return(
    <Container>
      
      <Link to={ target }>
      <IoArrowBack />Voltar
      </Link>
    </Container>
  )
}