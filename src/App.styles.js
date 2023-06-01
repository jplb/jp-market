import styled from 'styled-components';

import dt1 from './assets/img/others/detalhe-fundo.png';
import Pix from './assets/icon/pix.svg';
import Mastercard from './assets/icon/cc-mastercard.svg';
import Visa from './assets/icon/cc-visa.svg';
// import bgd1 from './assets/img/bgd/fundo-flores-roxas.png';

// background: url(${bgd2}) no-repeat;
// background-size: cover;

// export const PixIcon = styled(Pix)`
// font-size: 16px;
// `;

// export const MastercardIcon = styled(Mastercard)`
// font-size: 16px;
// `;
// export const VisaIcon = styled(Visa)`
// font-size: 16px;
// `;

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
min-width: 320px;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
font-family: 'Courier New';
color: #000;
margin: auto;
border: solid 0.5px #ccc
`;

export const Dpto = styled.div`
width: 100%;
min-width: 320px;
max-width: 1000px;
min-height: 96px;
font-family: 'Amatic SC', cursive;
font-size: 96px;
font-weight: 700;
color: #9400d3f7;
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
color: #6c8094;
`;

export const Decoracao1 = styled.div`
width: 85%;
height: 16px;
background: url(${dt1});
background-size: cover;
background-position: center;
margin: 28px 0 30px 0;
`;

export const Decoracao2 = styled.div`
width: 85%;
height: 16px;
background: url(${dt1});
background-size: cover;
background-position: center;
margin: 44px 0 0 0;
`;

export const TextoDpto = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80%;
text-align: center; //ATENÇÃO!!!
font-family: 'Courier New';
font-size: 14px;
font-weight: 500;
margin: 8px 0 20px 0;
color: #6c8094;
`;

export const Carrossel = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 80%;
margin: auto;
overflow-x: scroll;
`;

export const BtnArea = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
height: 18px;
margin-top: 8px;
`;

export const PrevBtn = styled.button`
display: flex;
width: 49.5%;
height: 18px;
justify-content: center;
align-items: center;
border: none;
border-radius: 5px;
margin-bottom: 60px;
background: #91a0af;
cursor: pointer;
`;

export const NextBtn = styled.button`
display: flex;
width: 49.5%;
height: 18px;
justify-content: center;
align-items: center;
border: none;
border-radius: 5px;
margin-bottom: 60px;
background: #91a0af;
cursor: pointer;
`;

export const Produto = styled.div`
display: flex;
flex-direction: column;
width: 300px;
justify-content: center;
align-items: center;
`;

export const ImgProduto = styled.img`
display: flex;
width: 300px;
height: 220px;
object-fit: contain;
`;

export const DetalhesProduto = styled.div`
display: flex;
flex-direction: row;
width: 80%;
justify-content: space-between;
align-items: end;
font-family: Roboto;
font-size: 13px;
margin: 18px 0 12px 0;
`;


export const OpcoesPgto = styled.div`
display: flex;
flex-direction: row;
width: 80%;
justify-content: space-between;
align-items: start;
border: solid 1px #000;
border-left: none;
border-right: none;
padding-top: 4px;

`;
export const BlocoParcelas = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`;

export const BlocoJuros = styled.div`
display:flex;
flex-direction: row;
`;

export const CaixaAlta = styled.span`
display: flex;
font-size: 22px;
font-weight: 600;
justify-content: center;
align-items: start;
`;

export const CaixaBaixa = styled.span`
font-size: 12px;
`;

export const Legenda = styled.div`
width: 100%;
font-size: 10px;
margin: -6px 0 4px 0;
`;

export const CondicoesPgto = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: start;
align-items: end;
`;

export const ValorAVista = styled.div`
display: flex;
font-size: 10px;
`;

export const DescontoPix = styled.div`
display: flex;
flex-direction: row;
font-size: 10px;
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
border: solid 2px #9400d3f7;
margin-top: 50px;
padding: 6px 0 72px 0;
`;

export const TituloUnidades = styled.div`
display: flex:
width: 80%;
justify-content: center;
align-items: center;
font-size: 13px;
font-weight: 500;
color: #6c8094;
border-bottom: solid 0.5px #9400d3f7;
padding: 16px 0;
margin: 16px 0;
`;

export const LinkUnidade = styled.div`
display: flex:
width: 70%;
justify-content: center;
align-items: center;
font-size: 13px;
font-weight: 500;
color: #6c8094;
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
font-family: 'Herr Von Muellerhoff', cursive;
font-size: 24px;
font-weight: 600;
margin: 4px 0 16px 0;
color: #000;
`;

export const TextoRodape = styled.div`
display: flex;
text-align: justify;
width: 100%;
font-size: 10px;
color: #6c8094;
`;
