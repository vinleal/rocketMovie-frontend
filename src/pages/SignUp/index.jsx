import { Container } from "./styles"

import { Link } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md"
import { BiUser, BiLockAlt  } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";


import img from "../../assets/cinema.png"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <div>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo o que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={BiUser} />
        <Input placeholder="E-mail" icon={MdOutlineMail} />
        <Input type="password" placeholder="Senha" icon={BiLockAlt} />
        <Button title="Cadastrar" />
        <Link to="/"> 
          <IoArrowBack size={24} />
          Voltar para o login
        </Link>
      </div>
      <div>
        <img src={img}/>
      </div>
    </Container>
  )
}