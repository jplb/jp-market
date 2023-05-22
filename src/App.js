import { Container, Dpto, Logo, TextoDpto, DetalhesProduto, AreaCarrossel  } from './App.styles';

function App() {
  return (
    <Container>
      <Dpto>
        BELEZA
      </Dpto>
      <Logo>
        JP Market
      </Logo>
      <TextoDpto>
        O JP Market agora possui um espaço beleza<br></br>onde você encontra tudo para montar looks únicos.<br></br>
        Venha Conhecer!
      </TextoDpto>
      <AreaCarrossel>IMAGEM</AreaCarrossel>
      <DetalhesProduto>
        <span>
          GOOD GIRL DOT DRAMA EDP<br></br>
          CAROLINA HERRERA
        </span>
        <span>
          80 ML
        </span>
      </DetalhesProduto>
    </Container>
  );
}

export default App;
