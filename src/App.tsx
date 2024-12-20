import EstiloGlobal from './Componentes/EstiloGlobal';
import Cabecalho from './Componentes/Cabecalho';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sobre from './Componentes/Paginas/PaginaSobre';



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

            </Routes>
        </Router>
      </>  
  )
}

export default App