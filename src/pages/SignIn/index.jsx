import { Container } from "./styles"

import { MdOutlineMail } from "react-icons/md"
import { BiLockAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import img from "../../assets/cinema.png"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" icon={MdOutlineMail} />
        <Input placeholder="Senha" icon={BiLockAlt} />
        <Button title="Entrar" />
        <Link to="/SignUp">
          Criar conta
        </Link>
      </div>
      <div>
        <img src={img}/>
      </div>
    </Container>
  )
}