import styled from "styled-components";
import logoDb from "../../assets/logo-db.svg";
import BotaoMenu from "../BotaoCabecalho,";
import Curriculo from "../../assets/Curriculo.pdf";
import breakpoints from "../../Styles/Breakpoint/breakpoint";
import icon_email from "../../assets/Icones/email.png";
import icon_linkedn from "../../assets/Icones/linkedIn.png";
import icon_github from "../../assets/Icones/github.png";

const ContainerCabecalho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Navbar = styled.div`
  width: 100%;
  background: #bee7f9;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`

const NavGroup = styled.div`
  display: flex;
  align-items: center;
`;

const LogoDbImage = styled.img`
  width: 87px;
  height: 60px;
  margin-right: 32px;

  @media ${breakpoints.md} {
    margin-right: 0;
    margin-bottom: 10px;
  }
`

const LinkLogoDb = styled.a`
`

const MenuSection = styled.section`
    width: 356px;
    height: 44px; 
    display: flex;
    gap: 32px;
   
`

const RedesSociaisSection = styled.div`
  display: flex;
  align-items: center;

  @media ${breakpoints.md} {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

const Icones = styled.img`
    width: 24px;
    height: 24px; 
`

const IconButton = styled.a`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 8px;

  @media ${breakpoints.md} {
    margin: 8px 0;
  }
`;


const Cabecalho = () => {
    return (
        <>
        <ContainerCabecalho>
            <Navbar>
                <NavGroup>
                    <LinkLogoDb href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
                        <LogoDbImage src={logoDb} alt="Logo DB"/> 
                    </LinkLogoDb>
                    
            <MenuSection>
                <BotaoMenu largura="81px" endereco="/" texto="Sobre" novaAba=""/> 
                <BotaoMenu largura="108px" endereco={Curriculo} texto="Currículo" novaAba="" />
                <BotaoMenu largura="103px" endereco="/projetos" texto="Projetos" novaAba=""/> 
            </MenuSection>
        </NavGroup> 

            <RedesSociaisSection>
                <IconButton href="mailto:saulo.rodriges@dbserver.com.br" target="_blank" rel="noopener noreferrer">
                    <Icones src={icon_email} alt="E-mail"/>
                </IconButton>

                <IconButton  href="https://github.com/SauloHrodrigues" target="_blank" rel="noopener noreferrer">
                    <Icones src={icon_github} alt="gitHub"/>
                </IconButton>
                
                <IconButton  href="https://www.linkedin.com/in/saulohenriquerodrigues" target="_blank" rel="noopener noreferrer">
                    <Icones src={icon_linkedn} alt="LinkedIn"/> 
                </IconButton>
                  
            </RedesSociaisSection>
            </Navbar>
        </ContainerCabecalho>
        </>
    );
}


export default Cabecalho;