import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
        @font-face {
        font-family: 'TTSupermolot-Regular';
        src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Regular.ttf') format('ttf');
    }

    @font-face {
        font-family: 'TTSupermolot-Bold';
        src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Bold.ttf');
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
    
    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

export default EstiloGlobal;