// src/pages/Arte.jsx
import React from 'react';
import { useRoteiro } from '../context/RoteiroContext';
import './Pages.css';
import { usePlaces } from '../hooks/usePlaces';

const Arte = () => {
  const { places, loading, error } = usePlaces('arte');
  const { adicionar } = useRoteiro();

  if (loading) return <div className="page-container"><p>Carregando arte...</p></div>;
  if (error) return <div className="page-container"><p>Erro ao carregar dados.</p></div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Arte e Cultura</h1>
        <p>Descubra os tesouros artísticos de Pernambuco</p>
      </div>
      <div className="arte-grid">
        {places.map(arte => (
          <div key={arte.id} className="arte-card">
            <div className="arte-info">
              <h3>{arte.title}</h3>
              <p>{arte.description}</p>
              {arte.local_especifico && (
                <span className="arte-local">📍 {arte.local_especifico}</span>
              )}
              <button className="btn-adicionar-roteiro" onClick={() => adicionar(arte)}>
                + Adicionar ao roteiro
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arte;