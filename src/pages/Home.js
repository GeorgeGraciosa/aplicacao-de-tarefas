import { useContext } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';
import { NavLink } from 'react-router-dom';

function Home() {
  const { tarefasCasa, tarefasTrabalho } = useContext(TarefasContexto);

  return (
    <>
      <div className='body-container'>
        <div className='container-home'>
          <h1 className='titulo-home'>Tarefas para hoje</h1>

          <div className='tarefas-container'>
            <NavLink to='/TarefasCasa' className='nav-link'>
              <div className='casa'>
                <h2>Tarefas de Casa</h2>
                <ul>
                  {tarefasCasa
                    .filter((tarefa) => !tarefa.concluida)
                    .map((tarefa, index) => (
                      <li key={index}>
                        <strong>{tarefa.titulo}</strong> <br />{' '}
                        {tarefa.descricao}
                      </li>
                    ))}
                </ul>
              </div>
            </NavLink>

            <NavLink to='/TarefasTrabalho' className='nav-link'>
              <div className='trabalho'>
                <h2>Tarefas Trabalho</h2>
                <ul>
                  {tarefasTrabalho
                    .filter((tarefa) => !tarefa.concluida)
                    .map((tarefa, index) => (
                      <li key={index}>
                        <strong>{tarefa.titulo}</strong> <br />{' '}
                        {tarefa.descricao}
                      </li>
                    ))}
                </ul>
              </div>
            </NavLink>
          </div>
        </div>

        <div className='divisor-home'></div>

        <div className='concluidas-home-container'>
          <h2 className='titulo-home'>Tarefas Concluidas</h2>
          <div className='concluidas-container'>
            <div className='concluida-home'>
              <h3>Casa</h3>
              <ul>
                {tarefasCasa
                  .filter((tarefa) => tarefa.concluida)
                  .map((tarefa) => (
                    <li className='concluida' key={tarefa.id}>
                      <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
                    </li>
                  ))}
              </ul>
            </div>
            <div className='concluida-home'>
              <h3>Trabalho</h3>
              <ul>
                {tarefasTrabalho
                  .filter((tarefa) => tarefa.concluida)
                  .map((tarefa) => (
                    <li className='concluida' key={tarefa.id}>
                      <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='footer-container'></div>
      </footer>
    </>
  );
}

export default Home;
