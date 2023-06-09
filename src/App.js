import {useRef} from 'react';

import { Container, Dpto, Logo, Decoracao1, Decoracao2, TextoDpto, DetalhesProduto, Carrossel, Produto, ImgProduto,  OpcoesPgto, BlocoParcelas, BlocoJuros, CaixaAlta, Legenda, CondicoesPgto, ValorAVista, DescontoPix, Bandeiras, Unidades, TituloUnidades, LinkUnidade, Rodape, LogoRodape, TextoRodape, BtnArea, PrevBtn, NextBtn} from './App.styles';

import img1 from './assets/img/base-da-virginia.png';

import img2 from './assets/img/bepantriz-derma.png';

import img3 from './assets/img/nivea-pele-negra.jpg';

import img4 from './assets/img/perfume-dot-drama.png';

import img5 from './assets/img/perfume-phebo-brisa.png';

import img6 from './assets/img/ps-facial-neutrogena.png';

import rightArrow from './assets/icon/double-right-arrow-icon.png';

import leftArrow from './assets/icon/double-left-arrow-icon.png';

function App() {

  const carrossel = useRef(null);

  const handleLeftClick = (event) => {
    event.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  const produtos = [
    {
      id: 1,
      foto: img1,
      descricao: 'WEPINK BEAUTY',
      complemento: 'BASE LÍQUIDA PREMIUM',
      massaVol: '45 ML',
      precoVista: '199,90',
      precoParcelaInt: 19,
      precoParcelaDec: 99,
      precoJurosInt: 16,
      precoJurosDec: 99,
      parcela: 10,
      parcelaJuros: 15,
      link: 'https://imgcloud.com.br/share/wv12pO3sURq6LHYV',
    },
    {
      id: 2,
      foto: img2,
      descricao: 'BEPANTRIZ DERMA',
      complemento: 'REGENERADOR LABIAL',
      massaVol: '7,5 ML',
      precoVista: '21,90',
      precoParcelaInt: 21,
      precoParcelaDec: 90,
      precoJurosInt: 16,
      precoJurosDec: 65,
      parcela: 1,
      parcelaJuros: 2,
      link: 'https://imgcloud.com.br/share/jENLWVt9IuyYSaOK',
    },
    {
      id: 3,
      foto: img3,
      descricao: 'NIVEA BELEZA RADIANTE',
      complemento: 'PELE NEGRA',
      massaVol: '400 ML',
      precoVista: '24,90',
      precoParcelaInt: 24,
      precoParcelaDec: 90,
      precoJurosInt: 16,
      precoJurosDec: 30,
      parcela: 1,
      parcelaJuros: 2,
      link: 'https://imgcloud.com.br/share/1QVDKaplSgDBIOdd',
    },
    {
      id: 4,
      foto: img4,
      descricao: 'GOOD GIRL DOT DRAMA EDP',
      complemento: 'CAROLINA HERRERA',
      massaVol: '80 ML',
      precoVista: '499,90',
      precoParcelaInt: 49,
      precoParcelaDec: 99,
      precoJurosInt: 38,
      precoJurosDec: 70,
      parcela: 10,
      parcelaJuros: 15,
      link: 'https://imgcloud.com.br/share/tEZWYKSqpmpYf2hr',
    },
    {
      id: 5,
      foto: img5,
      descricao: 'PHEBO BRISA',
      complemento: 'EAU DE PARFUM',
      massaVol: '100 ML',
      precoVista: '239,90',
      precoParcelaInt: 23,
      precoParcelaDec: 99,
      precoJurosInt: 21,
      precoJurosDec: 90,
      parcela: 10,
      parcelaJuros: 15,
      link: 'https://imgcloud.com.br/share/iFet510aFkKPLIfH',
    },
    {
      id: 6,
      foto: img6,
      descricao: 'PROTETOR SOLAR NEUTROGENA',
      complemento: 'FACIAL SEM COR 70 FPS',
      massaVol: '40 G',
      precoVista: '39,90',
      precoParcelaInt: 19,
      precoParcelaDec: 95,
      precoJurosInt: 15,
      precoJurosDec: 78,
      parcela: 2,
      parcelaJuros: 4,
      link: 'https://imgcloud.com.br/share/XjzpjA5gjSOK7u8Z',
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
      <Carrossel ref={carrossel}>
        {
          produtos.map((item) => {
            return(
              <Produto key={item.id}>
                <a href={item.link}>
                <ImgProduto src={item.foto} alt={item.descricao} />
                </a>
          <DetalhesProduto>
        <span>
          {item.descricao}<br></br>
          {item.complemento}
        </span>
        <span>
          {item.massaVol}
        </span>
      </DetalhesProduto>
      <OpcoesPgto>
        <BlocoParcelas>
          <BlocoJuros>
            <CaixaAlta>
              {item.parcela}X&nbsp;<sup><small>R$</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              {item.precoParcelaInt}<sup><small>,{item.precoParcelaDec}</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            sem juros<sup><small>1</small></sup>
          </Legenda>
          <BlocoJuros>
            <CaixaAlta>
              {item.parcelaJuros}X&nbsp;<sup><small>R$</small></sup>
            </CaixaAlta>
            <CaixaAlta>
              {item.precoJurosInt}<sup><small>,{item.precoJurosDec}</small></sup>
            </CaixaAlta>
          </BlocoJuros>
          <Legenda>
            com juros<sup><small>2</small></sup>
          </Legenda>
        </BlocoParcelas>
        <CondicoesPgto>
          <ValorAVista>
            R${item.precoVista} à vista
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
        </Produto>
            );
          })
        }
      </Carrossel>
      <BtnArea>
          <PrevBtn onClick={handleLeftClick}><img style={{height: '12px'}} src={leftArrow} alt='seta apontando para esquerda, clique para visualizar os itens anteriores' /></PrevBtn>
          <NextBtn onClick={handleRightClick}><img style={{height: '12px'}} src={rightArrow} alt='seta apontando para direita, clique para visualizar os itens seguintes' /></NextBtn>
        </BtnArea>
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
