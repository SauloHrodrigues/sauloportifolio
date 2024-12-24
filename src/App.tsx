import EstiloGlobal from './Componentes/EstiloGlobal';
import Cabecalho from './Componentes/Cabecalho';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Componentes/Pages/Sobre';
import Projetos from './Componentes/Pages/Projetos';



function App() {
  
  return (
  
    <>
      <EstiloGlobal/>
        <Router>
          <Cabecalho/>
          <Routes>
            <Route path="/" element={
              <>
                <Sobre/>
              </>
            }/>

<Route path="/projetos" element={
              <>
                <Projetos/>
              </>
            }/>
            </Routes>
        </Router>
      </>  
  )
}

export default App