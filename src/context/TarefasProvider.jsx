import { useEffect, useState } from 'react';
import { TarefasContexto } from './TarefasContexto';

export function TarefasProvider({ children }) {
  const [tarefasCasa, setTarefasCasa] = useState(() =>
    JSON.parse(localStorage.getItem('tarefasCasa') ?? '[]')
  );
  const [tarefasTrabalho, setTarefasTrabalho] = useState(() =>
    JSON.parse(localStorage.getItem('tarefasTrabalho') ?? '[]')
  );

  useEffect(() => {
    localStorage.setItem('tarefasCasa', JSON.stringify(tarefasCasa));
    localStorage.setItem('tarefasTrabalho', JSON.stringify(tarefasTrabalho));
  }, [tarefasCasa, tarefasTrabalho]);

  return (
    <TarefasContexto.Provider
      value={{
        tarefasCasa,
        setTarefasCasa,
        tarefasTrabalho,
        setTarefasTrabalho,
      }}
    >
      {children}
    </TarefasContexto.Provider>
  );
}
