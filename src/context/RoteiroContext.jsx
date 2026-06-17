import React, { createContext, useContext, useState } from 'react';

const RoteiroContext = createContext();

export function RoteiroProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionar = (item) => {
    setItens(prev => {
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const remover = (id) => {
    setItens(prev => prev.filter(i => i.id !== id));
  };

  const limpar = () => setItens([]);

  return (
    <RoteiroContext.Provider value={{ itens, adicionar, remover, limpar }}>
      {children}
    </RoteiroContext.Provider>
  );
}

export function useRoteiro() {
  return useContext(RoteiroContext);
}