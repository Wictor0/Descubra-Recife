// src/pages/Cultura.jsx
import React from 'react';
import './Pages.css';
import { usePlaces } from '../hooks/usePlaces';
import frevo from '../assets/frevo.jpg';
import maracatu from '../assets/maracatu.jpg';
import cavaloMarinho from '../assets/cavalo_marinho.jpg';
import ciranda from '../assets/ciranda.jpg';

const imagensLocais = {
  'Frevo': frevo,
  'Maracatu': maracatu,
  'Cavalo Marinho': cavaloMarinho,
  'Ciranda': ciranda,
};

const Cultura = () => {
  const { places, loading, error } = usePlaces('cultura');

  if (loading) return <div className="page-container"><p>Carregando cultura...</p></div>;
  if (error) return <div className="page-container"><p>Erro ao carregar dados.</p></div>;

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Cultura Pernambucana</h1>
        <p>Uma riqueza que pulsa nas veias do nosso povo</p>
      </div>
      <div className="culturas-grid">
        {places.map(cultura => (
          <div key={cultura.id} className="cultura-card">
            <div className="cultura-imagem">
              <img src={imagensLocais[cultura.title] || frevo} alt={cultura.title} />
            </div>
            <div className="cultura-info">
              <h3>{cultura.title}</h3>
              <p>{cultura.description}</p>
              {cultura.curiosidade && (
                <div className="cultura-curiosidade">
                  💡 {cultura.curiosidade}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="eventos-section">
        <h2>Próximos Eventos Culturais</h2>
        <div className="eventos-lista">
          <div className="evento-item">
            <div className="evento-data">MARÇO</div>
            <div className="evento-info">
              <h4>Carnaval Recife e Olinda</h4>
              <p>O maior carnaval de rua do mundo</p>
            </div>
          </div>
          <div className="evento-item">
            <div className="evento-data">ABRIL</div>
            <div className="evento-info">
              <h4>Festival de Frevo</h4>
              <p>Homenagem ao ritmo que é patrimônio da humanidade</p>
            </div>
          </div>
          <div className="evento-item">
            <div className="evento-data">JUNHO</div>
            <div className="evento-info">
              <h4>São João no Sítio Trindade</h4>
              <p>O maior São João da cidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultura;