import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BarraDeNavegacao from './BarraDeNavegacao';
import TarefasCasa from './pages/TarefasCasa';
import TarefasTrabalho from './pages/TarefasTrabalho';
import { TarefasProvider } from './context/TarefasProvider';

function App() {
  return (
    <BrowserRouter>
      <TarefasProvider>
        <BarraDeNavegacao />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/TarefasCasa' element={<TarefasCasa />}></Route>
          <Route path='/TarefasTrabalho' element={<TarefasTrabalho />}></Route>
        </Routes>
      </TarefasProvider>
    </BrowserRouter>
  );
}

export default App;
