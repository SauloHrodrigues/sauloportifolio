import styled from "styled-components";

  
  const Botao = styled.button`
    background-color: transparent;
    padding: 8px 16px;
    border: none;
  `
  const LinksMenu = styled.a`

    font-size: 18px;
    font-family: TTSupermolot-Bold;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 2%;
    color: #201F53;
    text-decoration: none;
  `

  interface ButtonProps {
    texto: string;
    largura: string;
    endereco: string;
    novaAba: string;
  }
  
  const BotaoMenu: React.FC<ButtonProps> = ({ largura, texto, endereco, novaAba }) => {
    return (
        <Botao style={{width: largura}} >
            <LinksMenu href={endereco} target={novaAba} rel="noopener noreferrer">
                {texto}
            </LinksMenu>
        </Botao>
    );
  };
  
  export default BotaoMenu;