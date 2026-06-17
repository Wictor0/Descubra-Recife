import React, { useState } from 'react';
import { useRoteiro } from '../context/RoteiroContext';
import { jsPDF } from 'jspdf';
import './Roteiro.css';

const categoriaLabel = {
  destinos: 'Destinos',
  gastronomia: 'Gastronomia',
  cultura: 'Cultura',
  experiencias: 'Experiencias',
  arte: 'Arte',
  faq: 'FAQ',
};

export default function Roteiro() {
  const { itens, remover, limpar } = useRoteiro();
  const [aberto, setAberto] = useState(false);

  const exportarPDF = () => {
    const doc = new jsPDF();
    const margem = 20;
    let y = 20;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text('Meu Roteiro — Descubra Recife', margem, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.text(`${itens.length} ${itens.length === 1 ? 'item selecionado' : 'itens selecionados'}`, margem, y);
    y += 12;

    doc.setDrawColor(220, 220, 220);
    doc.line(margem, y, 190, y);
    y += 10;

    // Agrupa por categoria
    const porCategoria = itens.reduce((acc, item) => {
      const cat = item.category || 'outros';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});

    Object.entries(porCategoria).forEach(([categoria, lista]) => {
      if (y > 260) { doc.addPage(); y = 20; }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(192, 88, 10);
      doc.text(categoriaLabel[categoria] || categoria, margem, y);
      y += 8;

      lista.forEach(item => {
        if (y > 260) { doc.addPage(); y = 20; }

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);
        doc.text(item.title, margem + 4, y);
        y += 6;

        if (item.description) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9.5);
          doc.setTextColor(80, 80, 80);
          const linhas = doc.splitTextToSize(item.description, 160);
          doc.text(linhas, margem + 4, y);
          y += linhas.length * 5;
        }

        const detalhes = [];
        if (item.local_especifico) detalhes.push(`Local: ${item.local_especifico}`);
        if (item.duracao) detalhes.push(`Duracao: ${item.duracao}`);
        if (item.preco) detalhes.push(`Preco: ${item.preco}`);
        if (item.onde_comer) detalhes.push(`Onde comer: ${item.onde_comer}`);

        if (detalhes.length > 0) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(9);
          doc.setTextColor(130, 130, 130);
          doc.text(detalhes.join('   |   '), margem + 4, y);
          y += 5;
        }

        y += 6;
        doc.setDrawColor(235, 235, 235);
        doc.line(margem + 4, y, 185, y);
        y += 6;
      });

      y += 4;
    });

    doc.save('roteiro-descubra-recife.pdf');
  };

  return (
    <>
      <button className="roteiro-fab" onClick={() => setAberto(true)}>
        <span className="roteiro-fab-icon">🗺️</span>
        {itens.length > 0 && <span className="roteiro-fab-count">{itens.length}</span>}
      </button>

      {aberto && (
        <div className="roteiro-overlay" onClick={() => setAberto(false)}>
          <div className="roteiro-painel" onClick={e => e.stopPropagation()}>
            <div className="roteiro-header">
              <h2>Meu Roteiro</h2>
              <button className="roteiro-fechar" onClick={() => setAberto(false)}>×</button>
            </div>

            {itens.length === 0 ? (
              <div className="roteiro-vazio">
                <p>Nenhum item adicionado ainda.</p>
                <p>Explore o site e clique em "Adicionar ao roteiro"!</p>
              </div>
            ) : (
              <>
                <div className="roteiro-lista">
                  {itens.map(item => (
                    <div key={item.id} className="roteiro-item">
                      <div className="roteiro-item-info">
                        <span className="roteiro-item-cat">{categoriaLabel[item.category] || item.category}</span>
                        <strong>{item.title}</strong>
                        {item.preco && <span className="roteiro-item-preco">{item.preco}</span>}
                      </div>
                      <button className="roteiro-item-remover" onClick={() => remover(item.id)}>×</button>
                    </div>
                  ))}
                </div>

                <div className="roteiro-footer">
                  <button className="btn-limpar" onClick={limpar}>Limpar tudo</button>
                  <button className="btn-exportar" onClick={exportarPDF}>Exportar PDF</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}