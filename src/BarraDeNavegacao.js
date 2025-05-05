import { NavLink } from 'react-router-dom';

function BarraDeNavegacao() {
  return (
    <header>
      <div className='navbar-container'>
        <nav className='nav-container'>
          <NavLink to='/' className='nav-titulo nav-link'>
            <h2>Lista de Tarefas</h2>
          </NavLink>
          <ul className='ul-container'>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link bar-link ${isActive ? 'ativo' : ''}`
                }
                to='/TarefasCasa'
              >
                Tarefas de Casa
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link bar-link ${isActive ? 'ativo' : ''}`
                }
                to='/TarefasTrabalho'
              >
                Tarefas do Trabalho
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='decoracao-barra'></div>
    </header>
  );
}

export default BarraDeNavegacao;
