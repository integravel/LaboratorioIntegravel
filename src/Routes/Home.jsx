import React from 'react';
import './Home.css';
import ImgCentral from '../Imgs/testeee.png';
import Conteudo_lista from '../Components/Conteudo_lista';
import CardComponent from '../Components/CardComponent';

function Home() {
  return (
    <div id="pagina-home">
      <div>
        <img src={ImgCentral} alt="Imagem Central" className="img-fluid" />
      </div>
      <section className="container">
        <div className="row">
          {Conteudo_lista.map((conteudo) => (
            <CardComponent key={conteudo.id} {...conteudo} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
