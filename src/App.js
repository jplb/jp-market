import { Container, Dpto, Logo, TextoDpto, DetalhesProduto, AreaCarrossel, OpcoesPgto, BlocoParcelas, BlocoJuros, CaixaAlta, CaixaBaixa, Legenda  } from './App.styles';

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
      <OpcoesPgto>
        <BlocoParcelas>
          <BlocoJuros>
            <CaixaAlta>
              10X
            </CaixaAlta>
            <CaixaBaixa>
              R$
            </CaixaBaixa>
            <CaixaAlta>
              49,99
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            sem juros
          </Legenda>
          <BlocoJuros>
          <CaixaAlta>
              10X 38,07
            </CaixaAlta>
            <Legenda>
            com juros
          </Legenda>
          </BlocoJuros>
        </BlocoParcelas>
      </OpcoesPgto>
    </Container>
  );
}

export default App;
