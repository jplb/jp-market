import styled from 'styled-components';
// import bgd1 from './assets/img/bgd/fundo-flores-roxas.png';

// background: url(${bgd2}) no-repeat;
// background-size: cover;


export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
min-width: 320px;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
color: #6c8094;
`;

export const Dpto = styled.div`
width: 100%;
min-width: 320px;
max-width: 1000px;
min-height: 96px;
font-family: 'Amatic SC', cursive;
font-size: 96px;
font-weight: 700;
color: #9400d3;
text-align: center;
vertical-align: middle;
margin: 20px 0 28px 0;
`;

export const Logo = styled.div`
font-family: 'Herr Von Muellerhoff', cursive;
font-size: 36px;
font-weight: 600;
text-align: center;
vertical-align: middle;
margin: 4px 0 80px 0;
`;

export const TextoDpto = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
text-align: center; //ATENÇÃO!!!
font-family: Roboto;
font-size: 16px;
margin: 8px 0 20px 0;
`;

export const AreaCarrossel = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 180px;
font-family: Roboto;
font-size: 18px;
font-weight: 800;
color: #fff;
text-align: center;
//vertical-align: middle;
margin: 16px 0 16px;
`;

export const Produto = styled.div`
display: flex;
width: 100%;
height: 180px;
justify-content: center;
align-items: center;
`;

export const ImagemProduto = styled.img`
display: flex;

//problema com distorção da imagem!!!
//mas numa situação real, eu, como dev
//seria responsável por conseguir formatar
// imagens de diferentes produtos com
//tamanhos iguais? ou um designer já me
//forneceria as imagens num tamanho perfeito?
//acho que a 2a ocasião é a mais provável...
`;

export const DetalhesProduto = styled.div`
display: flex;
flex-direction: row;
width: 65%;
justify-content: space-between;
align-items: end;
font-family: Roboto;
font-size: 13px;
margin: 0 0 12px 0;
`;


export const OpcoesPgto = styled.div`
display: flex;
flex-direction: row;
width: 65%;
justify-content: space-between;
align-items: end;
border: solid 1px #000;
border-left: none;
border-right: none;
//faz os ajustes dos spans em linha pra ser mais rápido
`;
export const BlocoParcelas = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin-top: 4px;
`;

export const BlocoJuros = styled.div`
display:flex;
flex-direction: row;
`;

export const CaixaAlta = styled.span`
display: flex;
font-size: 28px;
font-weight: 600;
justify-content: center;
align-items: start;
`;

export const CaixaBaixa = styled.span`
font-size: 12px;
`;

export const Legenda = styled.div`
width: 100%;
font-size: 16px;
margin: -6px 0 4px 0;
`;

export const CondicoesPgto = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`;

export const ValorAVista = styled.div`
display: flex;
justify-content: start;
align-items: start;
font-size: 12px;
`;

export const DescontoPix = styled.div`
display: flex;
flex-direction: row;
font-size: 12px;
font-weight: 600;
`;

export const Bandeiras = styled.div`
display: flex;
font-size: 12px;

`;

export const Unidades = styled.div`
display: flex;
flex-direction: column;
width: 80%;
justify-content: start;
align-items: center;
border: solid 1px #000;
margin-top: 80px;
padding: 6px 0 72px 0;
`;

export const TituloUnidades = styled.div`
display: flex:
width: 80%;
justify-content: center;
align-items: center;
font-size: 15px;
border-bottom: solid 0.5px #000;
padding: 16px 0;
margin: 16px 0;
`;

export const LinkUnidade = styled.div`
display: flex:
width: 70%;
justify-content: center;
align-items: center;
font-size: 15px;
margin: 4px 0;
`;

export const Rodape = styled.div`
display: flex;
flex-direction: column;
width: 85%;
justify-content: start;
align-items: center;
margin: 20px 0;
`;

export const LogoRodape = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-family: 'Merienda', cursive;
font-size: 20px;
margin: 4px 0 16px 0;
`;

export const TextoRodape = styled.div`
display: flex;
// justify-content: start;
// align-items: center;
text-align: justify;
width: 100%;
font-size: 12px;
`;
