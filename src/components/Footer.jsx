import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import iconFooter from '../assets/icon_footer.png'; 

const Footer = () => {
  return (
    <footer className="footer-main-container">
      
      {/* SEÇÃO 1: SÍMBOLOS COLORIDOS */}
      <div className="footer-symbols-header">
        <img src={iconFooter} alt="Ícones Culturais de Pernambuco" />
      </div>

      {/* SEÇÃO 2: CONTEÚDO PRINCIPAL (Grid Organizado) */}
      <div className="footer-grid-content">
        
        {/* Coluna 1: Título/Branding */}
        <div className="footer-grid-col col-logo">
          <h2 className="branding-title">Descubra<br/>Recife</h2>
        </div>

        {/* Coluna 2: Sobre e Redes Sociais */}
        <div className="footer-grid-col col-about">
          <p className="about-text">DESCUBRA O MELHOR DE PERNAMBUCO COM NOSSO GUIA COMPLETO DE TURISMO, CULTURA E GASTRONOMIA.</p>
          <div className="social-links-container">
            <FaInstagram className="social-icon icon-insta" />
            <FaFacebook className="social-icon icon-fb" />
            <FaTiktok className="social-icon icon-tiktok" />
            <FaTwitter className="social-icon icon-twitter" />
          </div>
        </div>

        {/* Coluna 3: Linksrápidos - Informações */}
        <div className="footer-grid-col col-links links-left">
          <h3 className="col-title">INFORMAÇÕES</h3>
          <ul>
            <li><a href="#sobre">SOBRE RECIFE</a></li>
            <li><a href="#como-chegar">COMO CHEGAR</a></li>
            <li><a href="#onde-fica">ONDE FICA</a></li>
            <li><a href="#mapa">MAPA TURÍSTICO</a></li>
          </ul>
        </div>

        {/* Coluna 4: Links rápidos - Explorar */}
        <div className="footer-grid-col col-links links-right">
          <h3 className="col-title">EXPLORAR</h3>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#destinos">DESTINOS</a></li>
            <li><a href="#experiencias">EXPERIÊNCIAS</a></li>
            <li><a href="#cultura">CULTURA</a></li>
            <li><a href="#gastronomia">GASTRONOMIA</a></li>
          </ul>
        </div>

        {/* Coluna 5: Contato */}
        <div className="footer-grid-col col-contact">
          <h3 className="col-title title-contact">CONTATO</h3>
          <ul className="contact-info-list">
            <li><FaEnvelope className="c-icon icon-blue" /> ATENDIMENTO@DESCUBRARECIFE.COM.BR</li>
            <li><FaWhatsapp className="c-icon icon-yellow" /> 81 9 0000-0000</li>
            <li><FaMapMarkerAlt className="c-icon icon-green" /> RUA PADRE CARAPUCEIRO, 590 BOA VIAGEM, RECIFE<br/>- PE, 51020-280</li>
          </ul>
        </div>

      </div>

      {/* SEÇÃO 3: BASE (Copyright e Políticas) */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">© 2026 DESCUBRA RECIFE. TODOS OS DIREITOS RESERVADOS.</p>
        <div className="policy-links">
          <a href="#privacidade">POLÍTICA DE PRIVACIDADE</a>
          <a href="#termos">TERMOS DE USO</a>
          <a href="#cookies">COOKIES</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;