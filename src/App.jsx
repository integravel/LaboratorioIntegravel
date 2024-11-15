import './App.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ImgCentral from './Imgs/testeee.png';
import Conteudo_lista from './Components/Conteudo_lista';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="pagina-home">
        <div>
          <img src={ImgCentral} alt="Imagem Central" className="img-fluid" />
        </div>
        <section className="container">
          <div className="row">
            {Conteudo_lista.map((conteudo) => (
              <div key={conteudo.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <a href={conteudo.encaminhar} className="card-link">
                  <div className="card" style={{ width: '100%' }}>
                    <img src={conteudo.img} className="card-img-top img-fluid" alt={`Imagem do ${conteudo.name}`} />
                    <div className="card-body">
                      <h3 className="card-title">{conteudo.name}</h3>
                      <p className="card-text">{conteudo.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
