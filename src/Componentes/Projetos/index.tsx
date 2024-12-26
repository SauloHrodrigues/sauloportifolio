import styled from "styled-components";
import Card from "../Cards"; 
import breakpoints from "../../Styles/Breakpoint/breakpoint";
import ImgPrevisao from "../../assets/previsao.jpg"; 
import ImgSelenium from "../../assets/selenium.jpg"; 
import Alunos from "../../assets/profe_aluno.jpg"; 


const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;   
}
`;

const SubTitulo = styled.h1`
    font-family: 'TTSupermolot-Bold';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    color: #292929;
    width: 505px;
    height: 44px;
    `;

    const Titulo = styled.h1`
    font-family: 'TTSupermolot-Bold';
    font-size: 80px;
    font-weight: 400;
    line-height: 44.46px;
    color: #292929;
    width: 505px;
    height: 44px;
    
    `;

const ContainerDeCads = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;

  @media ${breakpoints.bg} {
    margin-left: 0;
  }
`;

 
const Projetos = () => {
    return (
    <Container>
        
        <SubTitulo>Meus </SubTitulo>
        <Titulo>Projetos</Titulo>
        <ContainerDeCads>
       
          <Card
            imagem={ImgSelenium}
            titulo="Testando o site da Amazon"
            tecnologias= "Java, Selenium, Cucumber"
            descricao= "O presente repositório trata-se de um projeto com a elaboração de 15 cenários           de testes de software, utilizando-se o fremework selenium, escritos em linguagem Java, tendo como foco avaliar o conteúdo aprendido durante os três meses de treinamento."
            acesso= "https://github.com/SauloHrodrigues/Avaliacao01_TestesDeSoftwares_Keeggo.git"
          />
          
          <Card
            imagem={ImgPrevisao}
            titulo="Previsão do Tempo"
            tecnologias= "Java, Spring, React e HTML"
            descricao= "O presente repositório trata-se de um projeto de apreendizado, envolvendo tanto front como back. Consiste no desenvolvimento de uma aplicação de  previsão do tempo."
            acesso= "https://github.com/SauloHrodrigues/Projeto_PrevisaoDoTempo.git"
          />

          <Card
            imagem={Alunos}
            titulo="Crud Aluno e professor"
            tecnologias= "Java, Spring, Mokito e testes unitários"
            descricao= "O presente projeto foi a resolução de um desafio de backand, que se traduz em um sitema simples de gestão escolar, envolvendo Cursos, alunos e professores."
            acesso= "https://github.com/SauloHrodrigues/Desafio_Crud_Alunos-Cursos-Professor.git"
          />

       
        </ContainerDeCads>
    </Container>
    )
};
export default Projetos;