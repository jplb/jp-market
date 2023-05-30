import { Container, Dpto, Logo, Decoracao1, Decoracao2, TextoDpto, DetalhesProduto, AreaCarrossel, Produto, ImagemProduto,  OpcoesPgto, BlocoParcelas, BlocoJuros, CaixaAlta, Legenda, CondicoesPgto, ValorAVista, DescontoPix, Bandeiras, Unidades, TituloUnidades, LinkUnidade, Rodape, LogoRodape, TextoRodape, PixIcon, MastercardIcon, VisaIcon } from './App.styles';

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
      descricao: 'WEPINK BEAUTY',
      complemento: 'BASE LÍQUIDA PREMIUM',
      massaVol: '45 ML',
      precoVista: '199,90',
      precoParcela: '19,99',
      precoJuros: '16,99',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img2,
      descricao: 'BEPANTRIZ DERMA',
      complemento: 'REGENERADOR LABIAL',
      massaVol: '7,5 ML',
      precoVista: '21,90',
      precoParcela: null,
      precoJuros: null,
      parcela: null,
      parcelaJuros: null,
    },
    {
      foto: img3,
      descricao: 'NIVEA BELEZA RADIANTE',
      complemento: 'PELE NEGRA',
      massaVol: '400 ML',
      precoVista: '24,90',
      precoParcela: null,
      precoJuros: null,
      parcela: null,
      parcelaJuros: null,
    },
    {
      foto: img4,
      descricao: 'GOOD GIRL DOT DRAMA EDP',
      complemento: 'CAROLINA HERRERA',
      massaVol: '80 ML',
      precoVista: '499,90',
      precoParcela: '49,99',
      precoJuros: '38,07',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img5,
      descricao: 'PHEBO BRISA',
      complemento: 'EAU DE PARFUM',
      massaVol: '100 ML',
      precoVista: '239,90',
      precoParcela: '23,99',
      precoJuros: '21,09',
      parcela: '10',
      parcelaJuros: '15',
    },
    {
      foto: img6,
      descricao: 'PROTETOR SOLAR NEUTROGENA',
      complemento: 'FACIAL SEM COR 70 FPS',
      massaVol: '40 G',
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
      <Decoracao1 />
      <TextoDpto>
        O Jay-P Market agora possui um espaço beleza onde você encontra tudo para montar looks únicos.<br></br>
        Venha Conhecer!
      </TextoDpto>
      <AreaCarrossel>
        <Carousel showThumbs={false} showArrows >
          <Produto>
              <img style={{width: '100%', height: '180px', objectFit: 'contain'}} src={img4} />
          </Produto>
          <Produto>
          <img style={{width: '100%', height: '180px', objectFit: 'contain'}} src={img4} />
          </Produto>
        </Carousel>
      </AreaCarrossel>
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
              10X&nbsp;<sup><small>R$</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              49<sup><small>,99</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            sem juros<sup><small>1</small></sup>
          </Legenda>
          <BlocoJuros>
            <CaixaAlta>
              15X&nbsp;<sup><small>R$</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              49<sup><small>,99</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            com juros<sup><small>2</small></sup>
          </Legenda>
        </BlocoParcelas>
        <CondicoesPgto>
          <ValorAVista>
            R$499,90 à vista
          </ValorAVista>
          <DescontoPix>
           5% Off no Pix
          </DescontoPix>
          <Bandeiras>
            {/* <PixIcon />
            <MastercardIcon />
            <VisaIcon /> */}
          </Bandeiras>
        </CondicoesPgto>
      </OpcoesPgto>
      <Decoracao2 />
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
          Jay-P&nbsp;&nbsp; Market
        </LogoRodape>
        <TextoRodape>
          Jay-P Market Limited Company Central de Atendimento - Consultas, informações e serviços transacionais: 12344-5678 &#40;capitais e regiões mwtropolitanas&#41; e 0800 123 4567 &#40;demais localidades&#41;, atendimento de segunda a sábado, das 8h às 22h exceto feriados. SAC Jay-P - Reclamações, cancelamentos e informações gerais: 0800 987 6543. Deficiência auditiva ou de fala: 0800 456 1237 &#40;atendimento 24h, 7 dias por semana&#41;. Ouvidoria - Demandas não solucionadas pelos demais Canais de Atendimento: 0800 321 8975 &#40;atendimento de segunda a sexta-feira, das 8h às 18h, exceto feriados&#41;.
        </TextoRodape>
      </Rodape>
    </Container>
  );
}

export default App;
