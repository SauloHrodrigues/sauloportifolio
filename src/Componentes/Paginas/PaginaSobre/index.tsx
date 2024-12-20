import styled from "styled-components";
import FotoSaulo from "../../../assets/FotoSaulo.jpeg";
import ListSkills from "../../SoftSkills";
import breakpoints from "../../../Styles/Breakpoint/breakpoint";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  max-width: 1200px;
  margin: 0 auto;

  @media ${breakpoints.bg} {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;

const SideSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  @media ${breakpoints.bg} {
    justify-content: center;
    align-items: center;
  }
`;

const Nome = styled.h1`
  font-family: "Roboto Flex", sans-serif;
  font-size: 80px;
  font-weight: 700;
  color: #292929;
  margin-left: 124px;
  margin-top: 5px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const SaldacaoInicial = styled.h2`
  font-family: 'TTSupermolot-Bold';
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 124px;
  margin-top: 53px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const DercricaoProfissional = styled.h2`
  font-family: 'TTSupermolot-Regular';
  display: flex;
  font-size: 36px;
  font-weight: 400;
  color: #292929;
  margin-left: 120px;
  margin-top: 2px;
  margin-bottom: 83px;
  
  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;


const DesscricaoSobreMim = styled.p`
  font-family: "Roboto Flex", sans-serif;
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #292929;
  width: 360px;
  line-height: 19px;
  margin-left: 121px;

  @media ${breakpoints.bg} {
    margin-left: 0;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  margin-left: 116px;
  margin-right: 116px;
  padding-top: 45px;

  @media ${breakpoints.bg} {
    width: 100%;
    height: auto;
  }
`;
    
const PaginaSobre = () => {
    return (
        <Container> 
            <SideSection>
            <SaldacaoInicial>Olá, meu nome é </SaldacaoInicial>
            <Nome>Saulo Henrique Rodrigues</Nome>
            <DercricaoProfissional>Sou desenvolvedor full-stac.</DercricaoProfissional>
            <DesscricaoSobreMim>                
                Sou formado técnico em processamento de dados. Posteriormente, cursei a faculdade de direito e advoguei por cinco anos.
                Ao trabalhar como advogado, tive a percepção de que minha real paixão é ser programador, pois sinto-me mais afinado com a área.
                Em 2022, decidi transitar (retornar) para a área de programação. A princípio, meu interesse era ser programador Back em Java. No entanto, ao ser selecionado para participar do programa de inclusão da DB, fui levado a aprender novas stecks, dentre as quais, as de FrontEnd, que me empolgam bastante. Desde então, tenho as estudado. Embora, ainda pricipiante, me sinto motivado a desbravar o universo Full Steck.
                Nessa tônica, estou me propondo um novo projeto para 2025, nova graduação em Engennharia da Computação, não para sair da programação, mas ampliar meus conhecimentos em TI, tornar-me um programador com uma visão mais ampla, tanto na linha de tecnologia quanto de negócios.
            </DesscricaoSobreMim>

            </SideSection>

            <MainSection>
                <Image src={FotoSaulo}/>
           
            <ListSkills/>
            </MainSection>
        </Container>
    )
}
export default PaginaSobre;