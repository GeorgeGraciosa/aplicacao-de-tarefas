import { useContext, useState } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';

function TarefasCasa() {
  const { tarefasCasa, setTarefasCasa } = useContext(TarefasContexto);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const [descricaoEditada, setDescricaoEditada] = useState('');

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    const nova = {
      id: crypto.randomUUID(),
      titulo: novaTarefa,
      descricao,
      concluida: false,
    };
    setTarefasCasa([...tarefasCasa, nova]);
    setNovaTarefa('');
    setDescricao('');
  }

  function limparTarefa() {
    setNovaTarefa('');
    setDescricao('');
  }

  function concluirTarefa(id) {
    const tarefasAtualizadas = tarefasCasa.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );

    setTarefasCasa(tarefasAtualizadas);
  }

  function iniciarEdicao(id) {
    const tarefaAtualizada = tarefasCasa.find((tarefa) => tarefa.id === id);
    if (tarefaAtualizada) {
      setEditandoId(id);
      setTituloEditado(tarefaAtualizada.titulo);
      setDescricaoEditada(tarefaAtualizada.descricao);
    }
  }

  function salvarEdicao(id) {
    const tarefaAtualizada = tarefasCasa.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, titulo: tituloEditado, descricao: descricaoEditada }
        : tarefa
    );

    setTarefasCasa(tarefaAtualizada);
    setEditandoId(null);
  }

  function excluirTarefa(id) {
    const removerTarefa = tarefasCasa.filter((tarefa) => tarefa.id !== id);

    setTarefasCasa(removerTarefa);
  }

  function limparConcluidos() {
    const limparLista = tarefasCasa.filter((tarefa) => !tarefa.concluida);

    setTarefasCasa(limparLista);
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
      <div className='input-button'>
        <button
          className='adicionar'
          onClick={adicionarTarefa}
          disabled={!novaTarefa.trim()}
        >
          Adicionar
        </button>
        <button className='limpar' onClick={limparTarefa}>
          Limpar
        </button>
      </div>
      <div className='tarefa-casa-container'>
        <>
          <h2>Tarefas de Casa:</h2>
          <ul>
            {tarefasCasa
              .filter((tarefa) => !tarefa.concluida)
              .map((tarefa) => (
                <div className='tarefa-container'>
                  {editandoId === tarefa.id ? (
                    <>
                      <input
                        value={tituloEditado}
                        onChange={(e) => setTituloEditado(e.target.value)}
                      />
                      <input
                        value={descricaoEditada}
                        onChange={(e) => setDescricaoEditada(e.target.value)}
                      />
                      <button onClick={() => salvarEdicao(tarefa.id)}>
                        Salvar
                      </button>
                      <button onClick={() => setEditandoId(null)}>
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <li key={tarefa.id}>
                        <strong>{tarefa.titulo}</strong> <br />{' '}
                        {tarefa.descricao}
                      </li>
                      <button onClick={() => concluirTarefa(tarefa.id)}>
                        Concluir
                      </button>
                      <button onClick={() => iniciarEdicao(tarefa.id)}>
                        Editar
                      </button>
                      <button onClick={() => excluirTarefa(tarefa.id)}>
                        Excluir
                      </button>
                    </>
                  )}
                </div>
              ))}
          </ul>
          <div className='divisor'></div>
          <h2>Tarefas Concluidas:</h2>
          <ul>
            {tarefasCasa
              .filter((tarefa) => tarefa.concluida)
              .map((tarefa) => (
                <li className='concluida' key={tarefa.id}>
                  <strong>{tarefa.titulo}</strong> <br /> {tarefa.descricao}{' '}
                </li>
              ))}
          </ul>
          {tarefasCasa.filter((tarefa) => tarefa.concluida).length > 0 && (
            <button onClick={limparConcluidos}>Limpar Lista</button>
          )}
        </>
      </div>
    </div>
  );
}
export default TarefasCasa;
