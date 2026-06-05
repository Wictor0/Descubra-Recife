// src/pages/Experiencias.jsx
import React from 'react';
import './Pages.css';
import { usePlaces } from '../hooks/usePlaces';

const Experiencias = () => {
  const { places, loading, error } = usePlaces('experiencias');

  if (loading) return <div className="page-container"><p>Carregando experiências...</p></div>;
  if (error) return <div className="page-container"><p>Erro ao carregar dados.</p></div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Experiências Únicas</h1>
        <p>Vivências que vão transformar sua viagem em memórias inesquecíveis</p>
      </div>
      <div className="experiencias-grid">
        {places.map(exp => (
          <div key={exp.id} className={`experiencia-card ${exp.destaque ? 'destaque' : ''}`}>
            <div className="experiencia-icon">{exp.icone}</div>
            <h3>{exp.title}</h3>
            <p className="experiencia-descricao">{exp.description}</p>
            <div className="experiencia-detalhes">
              <span className="detalhe"><strong>⏱️</strong> {exp.duracao}</span>
              <span className="detalhe"><strong>📍</strong> {exp.local_especifico}</span>
              <span className="detalhe preco">{exp.preco}</span>
            </div>
            <button className="btn-reservar">Reservar Experiência →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencias;