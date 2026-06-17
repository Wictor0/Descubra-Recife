// src/pages/Destinos.jsx
import React, { useState } from 'react';
import { useRoteiro } from '../context/RoteiroContext';
import './Pages.css';
import { usePlaces } from '../hooks/usePlaces';
import marcoZero from '../assets/marco_zero.jpg';
import brennand from '../assets/brennand.jpg';
import orlaBv from '../assets/orla_bv.jpg';
import ofCeramica from '../assets/of_ceramica.jpg';
import recifeAntigo from '../assets/recife_antigo.jpg';
import pqEsculturas from '../assets/pq_esculturas.jpg';

const imagensLocais = {
  'Marco Zero': marcoZero,
  'Instituto Ricardo Brennand': brennand,
  'Praia de Boa Viagem': orlaBv,
  'Oficina Cerâmica Francisco Brennand': ofCeramica,
  'Recife Antigo': recifeAntigo,
  'Parque das Esculturas': pqEsculturas,
};

const Destinos = () => {
  const [filtro, setFiltro] = useState('Todos');
  const { places, loading, error } = usePlaces('destinos');
  const categorias = ['Todos', 'Histórico', 'Cultural', 'Praia', 'Arte'];
  const { adicionar } = useRoteiro();

  if (loading) return <div className="page-container"><p>Carregando destinos...</p></div>;
  if (error) return <div className="page-container"><p>Erro ao carregar dados.</p></div>;

  const destinosFiltrados = filtro === 'Todos'
    ? places
    : places.filter(d => d.subcategoria === filtro);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Destinos Imperdíveis</h1>
        <p>Conheça os lugares mais incríveis de Recife e região</p>
      </div>
      <div className="filtros-container">
        {categorias.map(cat => (
          <button
            key={cat}
            className={`filtro-btn ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >{cat}</button>
        ))}
      </div>
      <div className="destinos-grid">
        {destinosFiltrados.map(destino => (
          <div key={destino.id} className="destino-card">
            <div className="destino-imagem">
              <img src={imagensLocais[destino.title] || marcoZero} alt={destino.title} />
              {destino.subcategoria && <span className="destino-categoria">{destino.subcategoria}</span>}
            </div>
            <div className="destino-info">
              <h3>{destino.title}</h3>
              <p className="destino-descricao">{destino.description}</p>
              <button className="btn-adicionar-roteiro" onClick={() => adicionar(destino)}>
                + Adicionar ao roteiro
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinos;