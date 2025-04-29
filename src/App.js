import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BarraDeNavegacao from './pages/BarraDeNavegacao';
import TarefasCasa from './pages/TarefasCasa';
import TarefasTrabalho from './pages/TarefasTrabalho';

function App() {
  return (
    <BrowserRouter>
      <BarraDeNavegacao />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/TarefasCasa' element={<TarefasCasa />}></Route>
        <Route path='/TarefasTrabalho' element={<TarefasTrabalho />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
