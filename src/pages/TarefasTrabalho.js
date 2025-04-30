import { useContext, useState } from 'react';
import { TarefasContexto } from '../context/TarefasContexto';

function TarefasTrabalho() {
  const { tarefasTrabalho, setTarefasTrabalho } = useContext(TarefasContexto);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [tituloEditado, setTituloEditado] = useState('');
  const [descricaoEditada, setDescricaoEditada] = useState('');

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

  function concluirTarefa(index) {
    const tarefasAtualizadas = [...tarefasTrabalho];

    tarefasAtualizadas[index] = {
      ...tarefasAtualizadas[index],
      concluida: true,
    };
    setTarefasTrabalho(tarefasAtualizadas);
  }

  function iniciarEdicao(index) {
    setEditandoIndex(index);
    setTituloEditado(tarefasTrabalho[index].titulo);
    setDescricaoEditada(tarefasTrabalho[index].descricao);
  }

  function salvarEdicao(index) {
    const tarefasAtualizadas = [...tarefasTrabalho];

    tarefasAtualizadas[index] = {
      titulo: tituloEditado,
      descricao: descricaoEditada,
    };
    setTarefasTrabalho(tarefasAtualizadas);
    setEditandoIndex(null);
  }

  function excluirTarefa(index) {
    const tarefasAtualizadas = [...tarefasTrabalho];

    const removerTarefa = tarefasAtualizadas.filter(
      (tarefa, indexTarefa) => indexTarefa !== index
    );

    setTarefasTrabalho(removerTarefa);
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
      <div>
        <h2>Tarefas do Trabalho:</h2>
        <ul>
          {tarefasTrabalho.map((tarefa, index) => (
            <div className='tarefa-container' key={tarefa.index}>
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
export default TarefasTrabalho;
