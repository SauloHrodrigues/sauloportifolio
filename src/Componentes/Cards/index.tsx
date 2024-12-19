import styled from "styled-components";
import BotaoAcessar from "../BotaoCard/";

    const CardContainer = styled.div`
        width: 308px;
        height: 481px;
        border-radius: 8px;
        position: fixed;
        top: 316px; 
        left: 124px;
        gap: 10px;
        box-shadow: 5px 4px 6px rgba(0, 0, 0 , 0.4);
        `

    const ImagemDiv = styled.div`
        width: 307px;
        height: 190px;
        margin: 0px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    `

    const Imagem = styled.img`
        width: 100%;
        height: 100%;
        margin: 0px;
        object-fit: cover;
        overflow: hidden; 
    `

    const CardInformacoesDiv = styled.div`
        padding-right: 16px;
        padding-bottom: 24px;
        padding-left: 16px;
    `

    const TituloCard = styled.h2`
        font-family: 'TTSupermolot-Bold';
        font-size: 32px;
        font-weight: 400;
        white-space: nowrap;
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
        margin-bottom: 20px;
        
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
                 <ImagemDiv>
                    <Imagem src={imagem}/>
                 </ImagemDiv>
                
                <CardInformacoesDiv>
                <TituloCard>{titulo}</TituloCard>
                <TecnologiaUsadaCard>{tecnologias}</TecnologiaUsadaCard>
                <ContainerDiscritivo>
                <DescritivoCard>
                
                        {descricao}
                
                </DescritivoCard>

                </ContainerDiscritivo>
                  
                <BotaoAcessar endereco={acesso}/>

                </CardInformacoesDiv>
                  
                    
            </CardContainer>
    );
};
export default Card;