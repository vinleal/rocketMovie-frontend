import { Container, Profile, RocketMovies, Search } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <RocketMovies to="/">
        RocketMovies
      </RocketMovies>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">

        <div>
          <a>Vinicius Leal</a>
          <span>sair</span>
        </div>

        <img src="https://github.com/vinleal.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}