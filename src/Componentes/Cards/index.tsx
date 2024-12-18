import styled from "styled-components";
import BotaoAcessar from "../BotaoCard/";


const CardContainer = styled.div`
    width: 306px;
    height: 488px;
    padding: 0px 16px 24px 16px;
    position: fixed;
    top: 316px; 
    left: 124px;
    border: solid 1px blue;
    
    `
    const ImagemDiv = styled.img`
    width: 308px;
    height: 190px;
    margin: 0px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #D9D9D9;
    
    `
    const TituloCard = styled.h2`
        font-family: 'TTSupermolot-Bold';
        font-size: 32px;
        font-weight: 400;
        line-height: 39.52px;
        color: #292929;
        width: 274px;
        height: 40px;
        margin: 0px;
        
    `

    const TecnologiaUsadaCard = styled.text`
        font-family: 'TTSupermolot-Bold';
        font-size: 14px;
        font-weight: 400;
        line-height: 17.29px;
        color: #ED177D;
        width: 274px;
        height: 17px;          
    `

    const ContainerDiscritivo = styled.div`
        width: 274px;
        height: 133px;
        
        padding-top: 10px;
        
    `
    const DescritivoCard = styled.text` 
        font-family: 'Roboto-Flex';
        font-size: 16px;
        font-weight: 300;
        line-height: 18.75px;
        color: #292929;
        word-wrap: break-word;
    `
     
    interface CardsProps {
        imagem: string;
        titulo: string;
        tecnologias: string;
        descricao: string;
        acesso: string;
        largura?: string;
        altura?: string;
        esquerda?: string;
        topo?: string;
      }
      

const Card :  React.FC<CardsProps> = ({imagem, titulo, tecnologias, descricao, acesso,
    largura, altura, esquerda, topo }) => { 
    return (
        <CardContainer style={{width:largura, height: altura, top: topo, left: esquerda}}>
            <ImagemDiv src={imagem}/>
            
            <TituloCard>{titulo}</TituloCard>
            <TecnologiaUsadaCard>{tecnologias}</TecnologiaUsadaCard>
            <ContainerDiscritivo>
            <DescritivoCard>
               
                    {descricao}
               
            </DescritivoCard>
            </ContainerDiscritivo>
                <BotaoAcessar endereco={acesso}/>
                
        </CardContainer>
    );
};
export default Card;