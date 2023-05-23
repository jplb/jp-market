import { Container, Dpto, Logo, TextoDpto, DetalhesProduto, AreaCarrossel, OpcoesPgto, BlocoParcelas, BlocoJuros, CaixaAlta, Legenda  } from './App.styles';

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
              10X<sup><small>R$&nbsp;</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              49<sup><small>&nbsp;,99</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            sem juros<sup><small>1</small></sup>
          </Legenda>
          <BlocoJuros>
            <CaixaAlta>
              15X<sup><small>R$&nbsp;</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              49<sup><small>&nbsp;,99</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            com juros<sup><small>2</small></sup>
          </Legenda>
          
        </BlocoParcelas>
      </OpcoesPgto>
    </Container>
  );
}

export default App;
