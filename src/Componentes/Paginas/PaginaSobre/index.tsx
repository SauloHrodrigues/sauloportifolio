import styled from "styled-components";
import FotoSaulo from "../../../assets/FotoSaulo.jpeg";
import ListSkills from "../../SoftSkills";

const SaldacaoInicial = styled.text`
    font-family: 'TTSupermolot-Bold';
    font-size: 36px;
    font-weight: 400;
    color: #292929;
    width: 505px;
    height: 44px;
    position: fixed;
    top: 157px; 
    left: 124px;
`

const Nome = styled.text`
    font-family: 'Roboto Flex';
    font-size: 50px;
    font-weight: 700;
    color: #292929;
    width: 364px;
    height: 94px;
    position: fixed;
    top: 206px; 
    left: 124px;
    `

    const DercricaoProfissional = styled.h1`
    font-family: 'TTSupermolot-Regular';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.28px;
    color: #292929;
    width: 534px;
    height: 88px;
    position: fixed;
    top: 300px; 
    left: 120px;
    `
    const Foto = styled.img`
    width: auto;
    height: 292px;
    position: fixed;
    top: 157px; 
    left: 757px;
    `

    const TituloSobreMim = styled.h1`
    font-family: 'TTSupermolot-Bold';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    color: #292929;
    width: 176px;
    height: 44px;
    position: fixed;
    top: 494px; 
    left: 121px;
    `
    const TituloHabilidades = styled.h1`
    font-family: 'TTSupermolot-Bold';
    font-size: 36px;
    font-weight: 400;
    line-height: 44.46px;
    color: #292929;
    width: 191px;
    height: 44px;
    position: fixed;
    top: 494px; 
    left: 757px;
    `

    const DesscricaoSobreMim = styled.text`
    font-family: 'Roboto Flex';
    font-size: 16px;
    font-weight: 700;
    color: #292929;
    width: 360px;
    height: 181px;
    position: fixed;
    top: 570px; 
    left: 121px;
    `
    
const PaginaSobre = () => {
    return (
        <> 
            <SaldacaoInicial>Olá, meu nome é </SaldacaoInicial>
            <Nome>Saulo Henrique</Nome>
            <Foto src={FotoSaulo}/>
            <DercricaoProfissional>Sou treinee de desenvolvimento de software na DBServer.</DercricaoProfissional>
            <TituloSobreMim>Sobre mim</TituloSobreMim>
            <DesscricaoSobreMim>                
                Sou formado técnico em processamento de dados. Cursei a faculdade de direito e advoguei por cinco anos.
                Em 2022, infeliz na advocacia, decidi migrar (retornar) para a área de programação, minha paixão. Programar
                é onde eu me encontro. Meu objetivo é ser fullSteck. Meu projeto para 2025 é começar 
                nova graduação em engennharia da computação, não para sair da programação, mas busco tornar-me
                um programador com uma visão mais ampla, tanto na linha de tecnologia quanto de negócios.
            </DesscricaoSobreMim>
            <TituloHabilidades>Habilidades</TituloHabilidades>
            <ListSkills>teste</ListSkills>
            
        </>
    )
}
export default PaginaSobre;