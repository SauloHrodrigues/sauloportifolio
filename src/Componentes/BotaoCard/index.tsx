import styled from "styled-components";

  
  const Botao = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #201f53ff;
    color: #ffffff;
    font-family: 'TTSupermolot-Bold';
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #1d1b4fff;
    }
  `;
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