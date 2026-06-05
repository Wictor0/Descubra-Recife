// src/pages/Gastronomia.jsx
import React from 'react';
import './Pages.css';
import { usePlaces } from '../hooks/usePlaces';
import boloRolo from '../assets/bolo_rolo.jpg';
import caldeirada from '../assets/caldeirada.jpg';
import cartola from '../assets/cartola.jpg';
import tapioca from '../assets/tapioca.jpg';

const imagensLocais = {
  'Bolo de Rolo': boloRolo,
  'Caldeirada': caldeirada,
  'Cartola': cartola,
  'Tapioca': tapioca,
};

const Gastronomia = () => {
  const { places, loading, error } = usePlaces('gastronomia');

  if (loading) return <div className="page-container"><p>Carregando gastronomia...</p></div>;
  if (error) return <div className="page-container"><p>Erro ao carregar dados.</p></div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Gastronomia Pernambucana</h1>
        <p>Uma explosão de sabores que conta a história do nosso povo</p>
      </div>
      <div className="pratos-grid">
        {places.map(prato => (
          <div key={prato.id} className="prato-card">
            <div className="prato-imagem">
              <img src={imagensLocais[prato.title] || boloRolo} alt={prato.title} />
            </div>
            <div className="prato-info">
              <h3>{prato.title}</h3>
              <p className="prato-descricao">{prato.description}</p>
              {prato.onde_comer && (
                <div className="prato-onde">
                  <strong>Onde comer:</strong> {prato.onde_comer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="restaurantes-destaque">
        <h2>Restaurantes em Destaque</h2>
        <div className="restaurantes-grid">
          <div className="restaurante-card">
            <h3>Parraxaxá</h3>
            <p>Comida regional em buffet com mais de 80 opções.</p>
          </div>
          <div className="restaurante-card">
            <h3>Bode do Veio</h3>
            <p>Especializado em carne de bode e pratos típicos.</p>
          </div>
          <div className="restaurante-card">
            <h3>Leite</h3>
            <p>Culinária contemporânea em um casarão histórico.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastronomia;