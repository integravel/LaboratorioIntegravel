import React from "react";
import "../Components/Footer.css"; // Importa o CSS personalizado
import Contato from "../Imgs/Contato.png"; // Ícone de carta
import Cafezinho from "../Imgs/Cafezin.png";
import Amigurumis from "../Imgs/Amigurumis.png";
import Logo from '../Imgs/logo_primaria.png'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones do Facebook, Instagram e WhatsApp

const Footer = () => {
  return (
    <footer className="footer custom-footer m-0">
      <div className="container-fluid py-4">
        <div className="row text-center">
          {/* Seção Sobre */}
          <div className="col-md-4 about-section">
            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4062917T1" id="sobre">
              <img src={Cafezinho} alt="Sobre" width="70" height="70" />
              <p id='texto-sobre'>Sobre</p> {/* Removido 'text-white' */}
            </a>
          </div>

          {/* Seção Redes Sociais (na horizontal) */}
          <div className="col-md-4 social-media-section">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook size={35} color="#fff" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaInstagram size={35} color="#fff" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaWhatsapp size={35} color="#fff" />
            </a>
          </div>

          {/* Seção Contato e Parceiros (em uma única div) */}
          <div className="col-md-4 contact-and-partners-section">
            <div className="contact-section">
              <img src={Contato} alt="Contato" width="25" height="25" className="me-2" />
              <a href="mailto:integravel@gmail.com" className="text-white">integravel@gmail.com</a>
            </div>

            <div className="partners-section">
              <img src={Amigurumis} alt="Amigurumis" width="25" height="25" className="me-2" />
              <a href="https://www.instagram.com/atomigurumis/" className="text-white">Amigurumis de moléculas</a>
            </div>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="text-center mt-4">
          <span className="text-white">© 2024 Laboratório Integrável <img src={Logo} width='40px'/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
