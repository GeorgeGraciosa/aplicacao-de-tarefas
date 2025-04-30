import { useContext } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';
import { NavLink } from 'react-router-dom';

function Home() {
  const { tarefasCasa, tarefasTrabalho } = useContext(TarefasContexto);

  return (
    <>
      <div>
        <div className='body-container'>
          <h1>Tarefas para hoje:</h1>

          <NavLink to='/TarefasCasa'>
            <div className='casa'>
              <h2>Tarefas de Casa:</h2>
              <ul>
                {tarefasCasa.map((tarefa, index) => (
                  <li key={index}>
                    <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
                  </li>
                ))}
              </ul>
            </div>
          </NavLink>

          <NavLink to='/TarefasTrabalho'>
            <div className='trabalho'>
              <h2>Tarefas Trabalho:</h2>
              <ul>
                {tarefasTrabalho.map((tarefa, index) => (
                  <li key={index}>
                    <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
                  </li>
                ))}
              </ul>
            </div>
          </NavLink>
        </div>

        <footer>
          <div className='footer-container'></div>
        </footer>
      </div>
    </>
  );
}

export default Home;
