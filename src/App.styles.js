import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
background: #ccc;
`;

export const Dpto = styled.div`
font-family: Roboto;
font-size: 42px;
text-align: center;
vertical-align: middle;
margin: 20px 0 28px 0;
background: #fff;
`;

export const Logo = styled.div`
font-family: Roboto;
font-size: 28px;
text-align: center;
vertical-align: middle;
margin: 4px 0 80px 0;
background: #f00;
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
background: #0f0;
`;

export const AreaCarrossel = styled.div`
height: 180px;
font-family: Roboto;
font-size: 18px;
font-weight: 800;
color: #fff;
text-align: center;
vertical-align: middle;
margin: 16px 0 16px;
background: #00f;
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
background: #fff;
`;


export const Parcelamento = styled.div`
display: flex;
flex-direction: row;
width: 65%;
height: 100px;
border: solid 1px #000;
border-left: none;
border-right: none;
//faz os ajustes dos spans em linha pra ser mais rápido
`;


export const Unidades = styled.div`

`;

export const TituloUnidades = styled.div`

`;

export const LinkUnidade = styled.div`

`;

export const Rodape = styled.div`

`;

export const LogoRodape = styled.div`

`;

export const TextoRodape = styled.div`

`;
