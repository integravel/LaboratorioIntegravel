import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Layout from './Components/Layout'; // Importa o layout com o Nav e Footer
import Cursos from './Routes/CursosMOOD';
import Academico from './Academico';
import SemPaginaAinda from './Routes/SemPaginaAinda';

function App() {
  return (
    <Router>
      <Routes>
        {/* Defina a rota principal que utiliza o layout com Nav e Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='cursos' element={<Cursos />} />
          <Route path='demonstracaoemblocos' element={<SemPaginaAinda/>} />
          <Route path='academico' element={<Academico />} />

          <Route path='planejamentodidatico' element={<SemPaginaAinda/>} />
          <Route path='dinamicasmatematicas' element={<SemPaginaAinda/>} />
          <Route path='desafiosgeometria' element={<SemPaginaAinda/>} />
          <Route path='jogosdetabulheiro' element={<SemPaginaAinda/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
