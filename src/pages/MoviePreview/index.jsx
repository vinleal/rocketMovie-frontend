import { Content, MovieInfo, Tags, Description } from "./styles";
import { AiOutlineClockCircle } from "react-icons/ai"

import { PageContainer } from "../../components/PageContainer";
import { GoBack } from "../../components/GoBack";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function MoviePreview() {
  return(
    <PageContainer>
        <Content>
          <GoBack target="/" />
          <MovieInfo>
            <div>
              <h2>InterStellar</h2>
              <Rating />
            </div>
            <div>
              <div>
                <img src="https://github.com/vinleal.png" alt="Foto do usuário" />
                <span>Por Vinicius Leal</span>
              </div>
              <div>
                <AiOutlineClockCircle />
                <span>23/05/22 às 08:00</span>
              </div>
            </div>
          </MovieInfo>
          <Tags>
            <Tag title="Ficção científica" />
            <Tag title="Drama" />
            <Tag title="Família" />
          </Tags>
          <Description>
            <p> 
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, corporis? Consectetur ex quidem numquam, ullam voluptate modi ipsam sint quibusdam, 
            obcaecati sed reiciendis vitae a delectus, quasi temporibus reprehenderit cupiditate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae sapiente sint officia, corporis error numquam nesciunt perferendis eos distinctio culpa modi suscipit aspernatur recusandae rerum labore! Ea, saepe obcaecati!
            
            <br />
            <br />

            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officiis voluptates tenetur eveniet quis voluptate exercitationem quia vel ipsa saepe, eos quo laboriosam reprehenderit hic obcaecati in inventore quaerat autem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil enim sit aspernatur, autem repellendus non illum nisi fugiat similique consequuntur cupiditate, voluptatum dolores ipsa nesciunt, dolorem quo impedit nostrum?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, voluptates reprehenderit necessitatibus dolores libero veniam eius neque tenetur molestias illo ab minima commodi omnis nihil placeat aut sed obcaecati.
                        
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, corporis? Consectetur ex quidem numquam, ullam voluptate modi ipsam sint quibusdam, 
            obcaecati sed reiciendis vitae a delectus, quasi temporibus reprehenderit cupiditate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repudiandae sapiente sint officia, corporis error numquam nesciunt perferendis eos distinctio culpa modi suscipit aspernatur recusandae rerum labore! Ea, saepe obcaecati!
            
            <br />
            <br />

            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officiis voluptates tenetur eveniet quis voluptate exercitationem quia vel ipsa saepe, eos quo laboriosam reprehenderit hic obcaecati in inventore quaerat autem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil enim sit aspernatur, autem repellendus non illum nisi fugiat similique consequuntur cupiditate, voluptatum dolores ipsa nesciunt, dolorem quo impedit nostrum?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, voluptates reprehenderit necessitatibus dolores libero veniam eius neque tenetur molestias illo ab minima commodi omnis nihil placeat aut sed obcaecati.
            </p>
          </Description>
        </Content>
    </PageContainer>


  )
}