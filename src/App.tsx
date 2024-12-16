import { useState } from 'react';
import EstiloGlobal from './Componentes/EstiloGlobal';
import Cabecalho from './Componentes/Cabecalho';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Componentes/Paginas/PaginaSobre';
import styled from 'styled-components';

const Container = styled.div`
    width: 1440px;
    height: 1024px;
    position: fixed;
    top: 0px;
`

function App() {
  

  return (
    
    <Container>
      <EstiloGlobal/>
      <Router>
        <Cabecalho/>
        <Routes>

        <Route path="/" element={<>
            <Sobre/>
          </>} />
        </Routes>

      </Router>
      
      </Container>  
  )
}

export default App
