import { Container, Markers, TextArea, ButtonBlack } from "./styles";

import { PageContainer } from "../../components/PageContainer";
import { GoBack } from "../../components/GoBack";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";


export function CreateMovie() {
  return (
    <PageContainer>
        <GoBack target="/" />
      <Container>
        <h1> Novo filme</h1>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <TextArea>
          <textarea placeholder="Observações" ></textarea>
        </TextArea>
          <p>Marcadores</p>
        <Markers>
          <Marker value="Ficção" />
          <Marker value= "Novo Marcador" isNew/>   
        </Markers>
        <div>
          <ButtonBlack type="button">Excluir Filme</ButtonBlack>
          <Button title="Salvar Alterações" />
        </div>
      </Container>
    </PageContainer>
  )
}