import styled from "styled-components";
import linkedIn from "../../assets/Icones/linkedIn.png";
import github from "../../assets/Icones/github.png";
import email from "../../assets/Icones/email.png";
import logoDb from "../../assets/LogoDb.png";
import BotaoMenu from "../BotaoCabecalho,";
import Curriculo from "../../assets/Curriculo.pdf";

const CabecalhoFormat = styled.section`
    width: 100%;
    height: 87px;
    background-color: #BEE7F9; 
`;

const MenuMaisLogo = styled.div`
    width: 475px;
    height: 60px;
    align-items: center;
    display: flex;
    position: fixed;
    top: 20px; 
    left: 37px;
    gap: 32px    
    
`

const LogoDbImage = styled.img`
    width: 87px;
    height:80px; 
`

const LinkLogoDb = styled.a`

`

const MenuSection = styled.section`
    width: 356px;
    height: 44px; 
    display: flex;
    gap: 32px;
   
`

const RedesSociaisSection = styled.section`
    width: 200px;
    height: 44px; 
    display: flex;
    position: fixed;
    top: 28px; 
    left: 1119px;
    gap: 16px;
    
`

const Icones = styled.img`
    width: 24px;
    height: 24px; 
`



const Cabecalho = () => {
    return (
        <>
        <CabecalhoFormat>
            <MenuMaisLogo>
                
                    <LinkLogoDb href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
                    <LogoDbImage src={logoDb} alt="Logo DB"/> </LinkLogoDb>
                
                    
             
                <MenuSection>
                    <BotaoMenu largura="81px" endereco="/" texto="Sobre" novaAba=""/> 
                    <BotaoMenu largura="108px" endereco={Curriculo} texto="Currículo" novaAba="_blank" />
                    <BotaoMenu largura="103px" endereco="/projetos" texto="Projetos" novaAba=""/> 
                </MenuSection>
            </MenuMaisLogo>
            

            <RedesSociaisSection>
                <a href="mailto:saulo.rodriges@dbserver.com.br" target="_blank" rel="noopener noreferrer">
                <Icones src={email} alt="E-mail"/> </a>

                <a href="https://github.com/SauloHrodrigues" target="_blank" rel="noopener noreferrer">
                <Icones src={github} alt="gitHub"/> </a>
                
                <a href="https://www.linkedin.com/in/saulohenriquerodrigues" target="_blank" rel="noopener noreferrer">
                <Icones src={linkedIn} alt="LinkedIn"/> </a>
                  
            </RedesSociaisSection>
         

        </CabecalhoFormat>

        <div style={{marginTop:"88px"}}></div>
        </>
    );
}


export default Cabecalho;