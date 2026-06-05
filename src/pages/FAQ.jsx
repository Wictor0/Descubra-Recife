import React from 'react';
import './Pages.css';

const FAQ = () => {
  const faqs = [
    {
      pergunta: 'Qual a melhor época para visitar Recife?',
      resposta: 'A melhor época é entre setembro e fevereiro, quando o clima está mais seco e quente.'
    },
    {
      pergunta: 'Recife é uma cidade segura para turistas?',
      resposta: 'Sim, mas como em qualquer grande cidade, é importante tomar cuidados básicos e evitar áreas desertas à noite.'
    },
    {
      pergunta: 'Preciso de carro para conhecer Recife?',
      resposta: 'Não necessariamente. Há aplicativos de transporte e ônibus turísticos que atendem os principais pontos.'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Perguntas Frequentes</h1>
        <p>Tire suas dúvidas sobre Recife e planeje sua viagem</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.pergunta}</h3>
            <p>{faq.resposta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;