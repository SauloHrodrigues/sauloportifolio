import styled from "styled-components";
import BotaoAcessar from "../BotaoCard/";
import breakpoints from "../../Styles/Breakpoint/breakpoint";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 306px;
    flex: 0 1 calc(33.33% - 20px);
    max-width: 306px;
    background-color: #f5f5f5ff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    
    @media ${breakpoints.bg} {
        flex: 0 1 100%;
        min-width: 280px;
  }
        `

const ImagemDiv = styled.div`
        width: 100%;
        height: 183px;
        background-color: #d9d9d9ff;
        background-position: center;
        background-size: cover;
        border-radius: 8px 8px 0 0;
    `
    const TituloDiv = styled.div`
        width: auto;
        height: 85px;
    `

const TituloCard = styled.h3`
        font-family: 'TTSupermolot-Bold';
        font-size: 32px;
        color: #292929ff;
        margin: 10px 0;   
    `

const TecnologiaUsadaCard = styled.text`
        font-family: 'TTSupermolot-Bold';
        font-size: 14px;
        color: #ed177dff;
        margin: 10px 0;          
    `;

const DescritivoCard = styled.p` 
        font-family: 'Roboto Flex';
        font-weight: 300;
        font-size: 16px;
        color: #292929ff;
        line-height: 1.5;
        margin: 10px 0;
    `

const ButtonContainer = styled.div`
  margin-top: auto;
`;

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


const Card: React.FC<CardsProps> = ({ imagem, titulo, tecnologias, descricao,
    acesso, }) => {
    return (
        <CardContainer >
            <ImagemDiv style={{ backgroundImage: `url(${imagem})` }} />
            <TituloDiv>
            <TituloCard>{titulo}</TituloCard>
            </TituloDiv>
            <TecnologiaUsadaCard>{tecnologias}</TecnologiaUsadaCard>

            <DescritivoCard>

                {descricao}

            </DescritivoCard>

            <ButtonContainer>
                <BotaoAcessar endereco={acesso} />
            </ButtonContainer>

        </CardContainer>
    );
};
export default Card;