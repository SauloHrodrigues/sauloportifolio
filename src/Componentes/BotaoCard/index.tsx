import styled from "styled-components";

  
  const Botao = styled.button`
        width: 274px;
        height: 44px;
        border-radius: 8px;
        padding: 8px 16px;
        margin-bottom: 24px;
        gap: 10px;
        background-color: #201F53;
        color: white;
  `
  const LinksMenu = styled.a`
    text-decoration: none;
  `

  interface ButtonProps {
        endereco: string;
    
  }
  
  const BotaoCard: React.FC<ButtonProps> = ({endereco}) => {
    return (

            <LinksMenu href={endereco} target="_blank" rel="noopener noreferrer">
                <Botao>Acessar</Botao>
            </LinksMenu>
        
    );
  };
  
  export default BotaoCard;