import { Catalog, Content, Title } from "./styles";
import { BiPlus } from "react-icons/bi";

import { Button } from "../../components/Button";
import { PageContainer } from "../../components/PageContainer";
import { MovieCard } from "../../components/MovieCard";

export function Home() {
  return(
    <PageContainer>
      <Content>
        <Title>
          <div>
            <h2>Meus Filmes</h2>
          </div>
          <div>
            <Button to="/create" title=" Adicionar filme" icon={BiPlus} />
          </div>
        </Title>
        <Catalog>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Catalog>
      </Content>
    </PageContainer>
  )
}