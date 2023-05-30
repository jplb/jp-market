import { Container, Dpto, Logo, TextoDpto, DetalhesProduto, AreaCarrossel, Produto, ImagemProduto,  OpcoesPgto, BlocoParcelas, BlocoJuros, CaixaAlta, Legenda, CondicoesPgto, ValorAVista, DescontoPix, Bandeiras, Unidades, TituloUnidades, LinkUnidade, Rodape, LogoRodape, TextoRodape } from './App.styles';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import img1 from './assets/img/base-da-virginia.png';

import img2 from './assets/img/bepantriz-derma.png';

import img3 from './assets/img/nivea-pele-negra.jpg';

import img4 from './assets/img/perfume-dot-drama.png';

import img5 from './assets/img/perfume-phebo-brisa.png';

import img6 from './assets/img/ps-facial-neutrogena.png';

function App() {

  const produtos = [
    {
      foto: img1,
      descricao: 'Wepink Beauty',
      complemento: 'Base Líquida Premium',
      massaVol: '45 mL',
      precoVista: '199,90',
      precoParcela: '19,99',
      precoJuros: '16,99',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img2,
      descricao: 'Bepantriz Derma',
      complemento: 'Regenerador Labial',
      massaVol: '7,5 mL',
      precoVista: '21,90',
      precoParcela: null,
      precoJuros: null,
      parcela: null,
      parcelaJuros: null,
    },
    {
      foto: img3,
      descricao: 'Nivea Beleza Radiante',
      complemento: 'Creme para Pele Negra',
      massaVol: '400 mL',
      precoVista: '24,90',
      precoParcela: null,
      precoJuros: null,
      parcela: null,
      parcelaJuros: null,
    },
    {
      foto: img4,
      descricao: 'Good Girl Dot Drama EDP',
      complemento: 'Carolina Herrera',
      massaVol: '80 mL',
      precoVista: '499,90',
      precoParcela: '49,99',
      precoJuros: '38,07',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img5,
      descricao: 'Phebo Brisa',
      complemento: 'Eau de Parfum',
      massaVol: '100 mL',
      precoVista: '239,90',
      precoParcela: '23,99',
      precoJuros: '21,09',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img6,
      descricao: 'Protetor Solar Neutrogena',
      complemento: 'Facial Sem Cor FPS 70',
      massaVol: '40 g',
      precoVista: '239,90',
      precoParcela: '23,99',
      precoJuros: '21,09',
      parcela: '10',
      parcelaJuros: '15',
    },
  ];

  return (
    <Container>
      <Dpto>
        Beleza
      </Dpto>
      <Logo>
        Jay-P&nbsp;&nbsp; Market
      </Logo>
      <TextoDpto>
        O Jay-P Market agora possui um espaço beleza onde você encontra tudo para montar looks únicos.<br></br>
        Venha Conhecer!
      </TextoDpto>
      {/* O ideal seria utilizar algo semelhante ao FlatList do React Native para renderizar apenas os elementos necessários no Carrossel quando solicitados*/}
      <AreaCarrossel>
        <Carousel showThumbs={false}>
          <Produto>
            {/* CUIDADO!!! As dimensões definidas para a imagem dentro do componente Carrossel podem quebrar (e feio) seu app */}
              <img style={{width: '100%', height: '180px', objectFit: 'contain'}} src={img4} />
          </Produto>
          {/* <Produto>
              <img style={{width: '380px', height: '180px', objectFit: 'contain'}} src={img2} />
              <p className="legend">Legend 2</p>
          </Produto> */}
          {/* <div>
              <img src='./assets/img/nivea-pele-negra.png' />
              <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
      </AreaCarrossel>
      <DetalhesProduto>
        <span>
          Good Gilr Dot Drama EDP<br></br>
          Carolina Herrera
        </span>
        <span>
          80 mL
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
        <CondicoesPgto>
          <ValorAVista>
            ou R$499,90 à vista
          </ValorAVista>
          <DescontoPix>
           Desconto de 5% *Ícone Pix*
          </DescontoPix>
          <Bandeiras>
            *Ícones das Bandeiras*
          </Bandeiras>
        </CondicoesPgto>
      </OpcoesPgto>
      <Unidades>
        <TituloUnidades>
          Unidades Jay-P Market
        </TituloUnidades>
        <LinkUnidade>Belo Horizonte</LinkUnidade>
        <LinkUnidade>Campinas</LinkUnidade>
        <LinkUnidade>São Paulo</LinkUnidade>
        <LinkUnidade>Rio de Janeiro</LinkUnidade>
      </Unidades>
      <Rodape>
        <LogoRodape>
          Jay-P Market
        </LogoRodape>
        <TextoRodape>
          Jay-P Market Limited Company Central de Atendimento - Consultas, informações e serviços transacionais: 12344-5678 &#40;capitais e regiões mwtropolitanas&#41; e 0800 123 4567 &#40;demais localidades&#41;, atendimento de segunda a sábado, das 8h às 22h exceto feriados. SAC Jay-P - Reclamações, cancelamentos e informações gerais: 0800 987 6543. Deficiência auditiva ou de fala: 0800 456 1237 &#40;atendimento 24h, 7 dias por semana&#41;. Ouvidoria - Demandas não solucionadas pelos demais Canais de Atendimento: 0800 321 8975 &#40;atendimento de segunda a sexta-feira, das 8h às 18h, exceto feriados&#41;.
        </TextoRodape>
      </Rodape>
    </Container>
  );
}

export default App;
