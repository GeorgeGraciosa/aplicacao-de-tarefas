import { NavLink } from 'react-router-dom';

function BarraDeNavegacao(){
  return(
  <header>
          <div>
            <nav className='nav-container'>
              <NavLink to='/' className='nav-titulo'>
                <h2>Lista de Afazeres</h2>
              </NavLink>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'ativo' : '')}
                    to='/TarefasCasa'
                  >
                    Tarefas de Casa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => (isActive ? 'ativo' : '')}
                    to='/TarefasTrabalho'
                  >
                    Tarefas do Trabalho
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        )
}

export default BarraDeNavegacao;