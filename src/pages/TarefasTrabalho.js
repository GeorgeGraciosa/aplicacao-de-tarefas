import { useContext, useState, useRef, useEffect } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';

function TarefasTrabalho() {
  const { tarefasTrabalho, setTarefasTrabalho } = useContext(TarefasContexto);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [editandoId, setEditandoId] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const [descricaoEditada, setDescricaoEditada] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function adicionarTarefa() {
    if (novaTarefa.trim() === '') return;

    const nova = {
      id: crypto.randomUUID(),
      titulo: novaTarefa,
      descricao,
      concluida: false,
    };

    setTarefasTrabalho([...tarefasTrabalho, nova]);
    setNovaTarefa('');
    setDescricao('');
  }

  function limparTarefa() {
    setNovaTarefa('');
    setDescricao('');
  }

  function concluirTarefa(id) {
    const tarefaAtualizada = tarefasTrabalho.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );

    setTarefasTrabalho(tarefaAtualizada);
  }

  function iniciarEdicao(id) {
    const tarefaAtualizada = tarefasTrabalho.find((tarefa) => tarefa.id === id);

    setEditandoId(id);
    setTituloEditado(tarefaAtualizada.titulo);
    setDescricaoEditada(tarefaAtualizada.descricao);
  }

  function salvarEdicao(id) {
    const tarefaAtualizada = tarefasTrabalho.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, titulo: tituloEditado, descricao: descricaoEditada }
        : tarefa
    );

    setTarefasTrabalho(tarefaAtualizada);
    setEditandoId(null);
  }

  function excluirTarefa(id) {
    const removerTarefa = tarefasTrabalho.filter((tarefa) => tarefa.id !== id);

    setTarefasTrabalho(removerTarefa);
  }

  function limparConcluidos() {
    const limparLista = tarefasTrabalho.filter((tarefa) => !tarefa.concluida);

    setTarefasTrabalho(limparLista);
  }

  return (
    <div className='trabalho-container'>
      <input
        value={novaTarefa}
        placeholder='Insira a tarefa aqui'
        onChange={(e) => setNovaTarefa(e.target.value)}
        ref={inputRef}
        required
      />{' '}
      <br />
      <input
        value={descricao}
        placeholder='Insira a descrição da tarefa'
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
      <div className='tarefa-trabalho-container'>
        <>
          <h2>Tarefas do Trabalho</h2>
          <ul>
            {tarefasTrabalho
              .filter((tarefa) => !tarefa.concluida)
              .map((tarefa) => (
                <div className='tarefa-container' key={tarefa.id}>
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
                      <button
                        className='button-salvar'
                        onClick={() => salvarEdicao(tarefa.id)}
                      >
                        Salvar
                      </button>
                      <button
                        className='button-cancelar'
                        onClick={() => setEditandoId(null)}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        aria-label='Concluir tarefas'
                        className='button-concluir'
                        onClick={() => concluirTarefa(tarefa.id)}
                      ></button>
                      <li className={tarefa.concluida ? 'concluida' : ''}>
                        <strong>{tarefa.titulo}</strong> <br />{' '}
                        {tarefa.descricao}
                      </li>
                      <button
                        aria-label='Editar tarefa'
                        className='button-editar'
                        onClick={() => iniciarEdicao(tarefa.id)}
                      >
                        ✏️
                      </button>
                      <button
                        aria-label='Excluir tarefa'
                        className='button-excluir'
                        onClick={() => excluirTarefa(tarefa.id)}
                      >
                        ❌
                      </button>
                    </>
                  )}
                </div>
              ))}
          </ul>
          <div className='divisor'></div>
          <h2>Tarefas Concluidas</h2>
          <div className='tarefa-trabalho-concluida-container'>
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
          {tarefasTrabalho.filter((tarefa) => tarefa.concluida).length > 0 && (
            <button className='limpar-lista' onClick={limparConcluidos}>
              Limpar Lista
            </button>
          )}
        </>
      </div>
    </div>
  );
}
export default TarefasTrabalho;
