import React, { useState } from 'react';
import './CategoriasGrid.css';

import { 
  FaUmbrellaBeach, 
  FaUtensils, 
  FaTheaterMasks, 
  FaMusic,
  FaLandmark,
  FaFish,
  FaDrumstickBite,
  FaCamera,
  FaUmbrella,
  FaGlassCheers,
  FaHammer,
  FaPaintBrush
} from 'react-icons/fa';

const categorias = [
  { 
    id: 1, 
    nome: 'PRAIAS', 
    grad: 'linear-gradient(135deg, #FFB800, #00A896)',
    icon: <FaUmbrellaBeach />,
    descricao: 'As melhores praias do litoral pernambucano'
  },
  { 
    id: 2, 
    nome: 'GASTRONOMIA', 
    grad: 'linear-gradient(135deg, #FF7A00, #FF4D00)',
    icon: <FaUtensils />,
    descricao: 'Sabores únicos da culinária local'
  },
  { 
    id: 3, 
    nome: 'CULTURA', 
    grad: 'linear-gradient(135deg, #00A896, #028090)',
    icon: <FaTheaterMasks />,
    descricao: 'Frevo, maracatu e tradições'
  },
  { 
    id: 4, 
    nome: 'FOLIA', 
    grad: 'linear-gradient(135deg, #FFD600, #FF7A00)',
    icon: <FaGlassCheers />,
    descricao: 'Carnaval e festas populares'
  },
  { 
    id: 5, 
    nome: 'HISTÓRIA', 
    grad: 'linear-gradient(135deg, #EF476F, #FFD166)',
    icon: <FaLandmark />,
    descricao: 'Patrimônios históricos e museus'
  },
  { 
    id: 6, 
    nome: 'ECOTURISMO', 
    grad: 'linear-gradient(135deg, #06D6A0, #118AB2)',
    icon: <FaFish />,
    descricao: 'Natureza e aventura'
  },
  { 
    id: 7, 
    nome: 'ARTESANATO', 
    grad: 'linear-gradient(135deg, #FF8A00, #E52E2E)',
    icon: <FaPaintBrush />,
    descricao: 'Arte popular e feiras'
  },
  { 
    id: 8, 
    nome: 'FOTOGRAFIA', 
    grad: 'linear-gradient(135deg, #7209B7, #F72585)',
    icon: <FaCamera />,
    descricao: 'Pontos turísticos instagramáveis'
  },
];

const CategoriasGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className="categorias-header">
        <h2 className="categorias-title">Explore Pernambuco</h2>
        <p className="categorias-subtitle">Descubra os melhores destinos e experiências</p>
      </div>
      
      <div className="grid-container">
        {categorias.map((cat) => (
          <div 
            key={cat.id} 
            className={`cat-card ${hoveredId === cat.id ? 'hovered' : ''}`}
            style={{ background: cat.grad }}
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="card-icon">{cat.icon}</div>
            <h3 className="card-title">{cat.nome}</h3>
            {hoveredId === cat.id && (
              <p className="card-desc">{cat.descricao}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriasGrid;