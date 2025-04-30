import { useContext, useState } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';

function TarefasTrabalho() {
  const { tarefasTrabalho, setTarefasTrabalho } = useContext(TarefasContexto);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    setTarefasTrabalho([...tarefasTrabalho, { titulo: novaTarefa, descricao }]);
    setNovaTarefa('');
    setDescricao('');
  }

  function limparTarefa() {
    setNovaTarefa('');
    setDescricao('');
  }

  return (
    <div className='trabalho-container'>
      <input
        value={novaTarefa}
        placeholder='Insira a tarefa aqui'
        onChange={(e) => setNovaTarefa(e.target.value)}
        required
      />{' '}
      <br />
      <input
        value={descricao}
        placeholder='Insira a descrição da tarefa'
        onChange={(e) => setDescricao(e.target.value)}
      />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefa}>Limpar</button>
      </div>
      <h2>Tarefas do Trabalho:</h2>
      <ul>
        {tarefasTrabalho.map((tarefa, index) => (
          <div className='tarefa-container'>
            <li key={tarefa.index}>
              <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
            </li>
            <button>Concluir</button>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TarefasTrabalho;
