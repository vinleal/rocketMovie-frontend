import { Container } from "./styles"

import { Header } from "../Header"

export function PageContainer({children}) {
  return(
  <Container>
    <Header /> 
    <main>
      {children}
    </main>
  </Container>
  )
}