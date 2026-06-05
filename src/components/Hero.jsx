import React from 'react';
import './Hero.css';
import banner from '../assets/banner.png'; 
import iconsBanner from '../assets/icons_banner.png'; 
import iconBanner from '../assets/icon_banner.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-oval">
        
        <div className="art-and-stickers-wrapper">
          <div className="art-banner-wrapper">
            <img 
              src={banner} 
              className="art-banner-img" 
              alt="Descubra Recife - Arte Vibrante Pernambucana" 
            />
          </div>

          <div className="stickers-overlay">
            <img 
              src={iconsBanner} 
              className="sticker-composite"
              alt="Adesivos: Caranguejo, Mascarado, etc." 
            />
          </div>
        </div>

        <div className="text-banner-wrapper">
          <img 
            src={iconBanner} 
            className="text-banner-img" 
            alt="Terra do mangue, do frevo e do maracatu..."
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;