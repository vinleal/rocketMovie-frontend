import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function Marker({ isNew, value, onClick, ...rest}) {
  return(
    <Container isNew={isNew} length={value.length}>
      <p>{value}</p>

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus size={22}/> : <FiX size={22}/>}
      </button>
    </Container>
  )
}