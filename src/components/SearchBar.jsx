import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import Fuse from 'fuse.js';
import { searchData } from '../data/searchData';
import './SearchBar.css';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Configurar o Fuse.js para busca fuzzy
  const fuse = new Fuse(searchData, {
    keys: ['title', 'description', 'category'],
    threshold: 0.3,
    includeScore: true
  });

  // Fechar a busca ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focar no input quando abrir
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Atualizar resultados quando o termo de busca mudar
  useEffect(() => {
    if (searchTerm.length > 1) {
      const fuseResults = fuse.search(searchTerm);
      setResults(fuseResults.slice(0, 8)); // Limitar a 8 resultados
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.length > 1 && results.length > 0) {
      // Navegar para o primeiro resultado
      navigate(results[0].item.url);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleResultClick = (result) => {
    navigate(result.item.url);
    setIsOpen(false);
    setSearchTerm('');
  };

  const getCategoryColor = (category) => {
    const colors = {
      destinos: '#00A859',
      gastronomia: '#F26522',
      cultura: '#ED1C24',
      experiencias: '#005BB5',
      arte: '#9C27B0',
      faq: '#EC008C'
    };
    return colors[category] || '#6B6356';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      destinos: '📍 Destino',
      gastronomia: '🍽️ Gastronomia',
      cultura: '🎭 Cultura',
      experiencias: '✨ Experiência',
      arte: '🎨 Arte',
      faq: '❓ FAQ'
    };
    return labels[category] || category;
  };

  return (
    <div className="search-container" ref={searchRef}>
      <button 
        className="search-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buscar"
      >
        <FiSearch className="search-icon" />
      </button>

      {isOpen && (
        <div className="search-modal">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-wrapper">
              <FiSearch className="search-icon-input" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar destinos, cultura, experiências..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  className="search-clear"
                  onClick={() => setSearchTerm('')}
                >
                  <FiX />
                </button>
              )}
            </div>
          </form>

          {searchTerm.length > 1 && (
            <div className="search-results">
              {results.length > 0 ? (
                <>
                  <div className="results-header">
                    <span>{results.length} resultado(s) encontrado(s)</span>
                  </div>
                  {results.map((result) => (
                    <div
                      key={result.item.id}
                      className="search-result-item"
                      onClick={() => handleResultClick(result)}
                    >
                      <span 
                        className="result-category"
                        style={{ color: getCategoryColor(result.item.category) }}
                      >
                        {getCategoryLabel(result.item.category)}
                      </span>
                      <h4>{result.item.title}</h4>
                      <p>{result.item.description}</p>
                    </div>
                  ))}
                </>
              ) : (
                <div className="no-results">
                  <p>Nenhum resultado encontrado para "{searchTerm}"</p>
                  <small>Tente usar outras palavras ou verifique a ortografia</small>
                </div>
              )}
            </div>
          )}

          {searchTerm.length === 1 && (
            <div className="search-hint">
              <p>Digite pelo menos 2 caracteres para buscar</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;