import { Header, Container, Picture } from "./styles"
import { BiUser, BiLockAlt, BiCamera } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md"


import { GoBack } from "../../components/GoBack"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  return (
    <>
      <Header>
        <GoBack target="/"/>
      </Header>
      <Picture>
        <div>
          <img src="https://github.com/vinleal.png" alt="Foto do usuário" />
          <div>
            <BiCamera size={24} />
          </div>
        </div>
      </Picture>
      <Container>
        <div>
          <Input placeholder="Vinicius Leal" icon={BiUser} />
          <Input placeholder="vinleal@email.com" icon={MdOutlineMail}/>
          <br/>
          <Input type="password" placeholder="Senha Atual" icon={BiLockAlt}/>
          <Input type="password" placeholder="Nova senha" icon={BiLockAlt}/>
          <Button title="Salvar" disabled/>
        </div>
      </Container>
    </>
  )
}