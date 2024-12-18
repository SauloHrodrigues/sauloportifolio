import styled from "styled-components";
import Card from "../../Cards"; 
import ImgPrevisao from "../../../assets/previsao.jpg"; 
import ImgSelenium from "../../../assets/selenium.jpg"; 
import ImgJUnit from "../../../assets/imgJUnit.jfif"; 

const TituloMeus = styled.h1`
    font-family: 'TTSupermolot-Bold';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    color: #292929;
    width: 505px;
    height: 44px;
    position: fixed;
    top: 157px; 
    left: 124px;
    `

const TituloProjetos = styled.text`
    font-family: 'Roboto Flex';
    font-size: 80px;
    font-weight: 700;
    line-height: 93.75px;
    color: #292929;
    width: 296px;
    height: 94px;
    position: fixed;
    top: 206px; 
    left: 124px;
    `
 
const PaginaProjetos = () => {
    return (
    <>
        <TituloMeus>Meus</TituloMeus>
        <TituloProjetos>Projetos</TituloProjetos>
        <Card
          imagem={ImgSelenium}
          titulo="Calculadora"
          tecnologias= "Java, Selenium, Cucumber"
          descricao= "O presente repositório trata-se de um projeto com a elaboração de 15 cenários           de testes de software, utilizando-se o fremework selenium, escritos em linguagem Java, tendo como foco avaliar o conteúdo aprendido durante os três meses de treinamento."
          acesso= "https://github.com/SauloHrodrigues/Avaliacao01_TestesDeSoftwares_Keeggo.git"
        />
        
        <Card
          esquerda="516px"
          imagem={ImgPrevisao}
          titulo="Previsão do Tempo"
          tecnologias= "Java, Spring, React e HTML"
          descricao= "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
          acesso= "https://github.com/SauloHrodrigues/Projeto_PrevisaoDoTempo.git"
        />

        <Card
          esquerda="908px"
          imagem={ImgJUnit}
          titulo="Previsão do Tempo"
          tecnologias= "Java, Spring, Mokito e testes unitários"
          descricao= "O presente desafio esta sendo realizado no contexto de um treinamento na empresa DB, e tem como objetivo avaliar a capacidade de entrega. O desafio deve contemplar dois CRUD, um de Alunos e um curso, bem como testes unitários."
          acesso= "https://github.com/SauloHrodrigues/Desafio_Crud_Alunos-Cursos-Professor.git"
        />
    </>
    )
};
export default PaginaProjetos;