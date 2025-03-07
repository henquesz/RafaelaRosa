import React from "react";
import "./styles.css";

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
          &AudioVisual
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
        <div className="about-circle">Sobre →</div>
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
          <span className="footer-icon">📷</span>
          <span className="footer-icon">📞</span>
          <span className="footer-icon">🔗</span>
          <span className="footer-email">email@example.com</span>
        </div>
      </footer>
    </div>
  );
}
