import { useState } from 'react';

function TarefasCasa() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim === '') return;

    setTarefas([...tarefas, { titulo: novaTarefa, descricao }]);
    setNovaTarefa('');
    setDescricao('');
  }

  function concluirTarefa(){
    className = "concluido"
  }

  return (
    <div className='casa-container'>
      <input
        placeholder='Insira a tarefa aqui'
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />{' '}
      <br />
      <input
        placeholder='Insira a descrição da tarefa aqui'
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <div>
        <h2>Tarefas de Casa:</h2>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <strong>{tarefa.titulo}</strong>: {tarefa.descricao}
              <button onClick={concluirTarefa}>Concluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TarefasCasa;
