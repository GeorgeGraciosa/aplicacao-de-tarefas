import { useContext, useState } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';

function TarefasCasa() {
  const { tarefasCasa, setTarefasCasa } = useContext(TarefasContexto);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const [descricaoEditada, setDescricaoEditada] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    setTarefasCasa([...tarefasCasa, { titulo: novaTarefa, descricao }]);
    setNovaTarefa('');
    setDescricao('');
  }

  function limparTarefa() {
    setNovaTarefa('');
    setDescricao('');
  }

  function iniciarEdicao(index) {
    setEditandoIndex(index);
    setTituloEditado(tarefasCasa[index].titulo);
    setDescricaoEditada(tarefasCasa[index].descricao);
  }

  function salvarEdicao(index) {
    const tarefasAtualizadas = [...tarefasCasa];

    tarefasAtualizadas[index] = {
      titulo: tituloEditado,
      descricao: descricaoEditada,
    };
    setTarefasCasa(tarefasAtualizadas);
    setEditandoIndex(null);
  }

  function concluirTarefa(index) {
    const tarefasAtualizadas = [...tarefasCasa];

    tarefasAtualizadas[index] = {
      ...tarefasAtualizadas[index],
      concluida: true,
    };
    setTarefasCasa(tarefasAtualizadas);
  }

  function excluirTarefa(index) {
    const tarefasAtualizadas = [...tarefasCasa];

    const removerTarefa = tarefasAtualizadas.filter((tarefa, i) => i !== index);

    setTarefasCasa(removerTarefa);
  }

  return (
    <div className='casa-container'>
      <input
        placeholder='Insira a tarefa aqui'
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        required
      />
      {''}
      <br />
      <input
        placeholder='Insira a descrição da tarefa aqui'
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <div>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <button onClick={limparTarefa}>Limpar</button>
      </div>
      <div>
        <h2>Tarefas de Casa:</h2>
        <ul>
          {tarefasCasa.map((tarefa, index) => (
            <div className='tarefa-container' key={index}>
              {editandoIndex === index ? (
                <>
                  <input
                    value={tituloEditado}
                    onChange={(e) => setTituloEditado(e.target.value)}
                  />
                  <input
                    value={descricaoEditada}
                    onChange={(e) => setDescricaoEditada(e.target.value)}
                  />
                  <button onClick={() => salvarEdicao(index)}>Salvar</button>
                  <button onClick={() => setEditandoIndex(null)}>
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <li className={tarefa.concluida ? 'concluida' : ''}>
                    <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}
                  </li>
                  <button onClick={() => concluirTarefa(index)}>
                    Concluir
                  </button>
                  <button onClick={() => iniciarEdicao(index)}>Editar</button>
                  <button onClick={() => excluirTarefa(index)}>Excluir</button>
                </>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TarefasCasa;
