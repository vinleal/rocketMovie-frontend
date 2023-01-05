import { Container } from "./styles";
import { IoMdStar, IoMdStarOutline} from "react-icons/io"

export function Rating() {
  return(
    <Container>
      <IoMdStar size={20} />
      <IoMdStar size={20} />
      <IoMdStar size={20} />
      <IoMdStar size={20} />
      <IoMdStarOutline size={20} />
    </Container>
  )
}