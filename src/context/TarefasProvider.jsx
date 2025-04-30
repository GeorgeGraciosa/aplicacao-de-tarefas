import { useState } from 'react';
import { TarefasContexto } from './TarefasContexto';

export function TarefasProvider({ children }) {
  const [tarefasCasa, setTarefasCasa] = useState([]);
  const [tarefasTrabalho, setTarefasTrabalho] = useState([]);

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
