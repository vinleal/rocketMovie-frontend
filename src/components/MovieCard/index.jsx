import { Container } from "./styles";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function MovieCard() {
  return(
    <Container to="/preview">
      <div>
        <h2>InterStellar</h2>
        <Rating />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate magnam ipsam eos ipsa consequatur dolorem alias, officiis eaque suscipit iure? Vel ad impedit, omnis fuga reprehenderit eligendi doloribus optio unde?
        </p>
        <div>
          <Tag title="Ficção científica" />
          <Tag title="Drama" />
          <Tag title="Família" />
        </div>
      </div>
    </Container>
  )
}