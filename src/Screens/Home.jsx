import React from "react";
import "./styles.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function FullScreenDiv() {
  return (
    <div>
      <header className="header-container">
        <h1 className="header-title">Portifólio</h1>
        <h1 className="header-title">Sobre</h1>
        <h1 className="header-title">Contato</h1>
      </header>
      <div className="fullscreen-container">
        <div className="circle-title">
          Fotografia <br />
          &AudioVisual <br />
          →
        </div>
        <h1 className="typewriter">Rafaela Rosa</h1>
      </div>
      <div className="columns-container">
        <div className="column">
          <div className="header-title-card">Editorial</div>
          <div className="header-cont-1"></div>
        </div>
        <div className="column">
          <div className="header-title-card">Still</div>
          <div className="header-cont-2"></div>
        </div>
        <div className="column">
          <div className="header-title-card">Eventos</div>
          <div className="header-cont-3"></div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-circle">Sobre <br /> →</div>
        <div className="about-text">
        Nascida e criada em São Paulo, Formada em produção audiovisual e cursando bacharelado em fotografia. Rafaela Rosa busva expressar sua visão através da imagem fotográfica. Com assinatura de direção de fotografia em curtas com participações em festivais como Satyricine Bijou em São Paulo e Zafic festival na Colômbia, também aproveita da linguagem do vídeo em suas produções artísticas. <br />
        Fotografia editorial, moda e eventos musicais são seus principais nichos profissionais, a fotografia de rua e a arquitetura espressa seu trabalho autoral. 
        </div>
      </div>

      <div className="contact-container">
        <div className="label-contact">compartilhe sua ideia</div>
        <div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Nome" className="form-input" />
            <input type="text" placeholder="Sobrenome" className="form-input" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-row">
            <textarea placeholder="Mensagem" className="form-textarea"></textarea>
          </div>
          <button type="submit" className="form-button">Enviar</button>
        </form>
        </div>
      </div>

      <footer className="footer-container">
  <div className="footer-content">
    <div className="icons-group">
      <div className="icon-wrapper">
        <FaWhatsapp className="icon" />
      </div>
      <div className="icon-wrapper">
        <FaInstagram className="icon" />
      </div>
      <div className="icon-wrapper">
        <FaLinkedin className="icon" />
      </div>
    </div>
    <span className="footer-email">contato@rafaelarnfotografia</span>
  </div>
</footer>
    </div>
  );
}
