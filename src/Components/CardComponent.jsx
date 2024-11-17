import { Link } from 'react-router-dom'; // Importa o Link para navegação interna

function CardComponent({ id, encaminhar, img, name, description }) {
  const isExternalLink = encaminhar.startsWith("http"); // Verifica se o link é externo

  return (
    <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      {isExternalLink ? (
        <a href={encaminhar} className="card-link" target="_blank" rel="noopener noreferrer">
          <div className="card" style={{ width: '100%' }}>
            <img src={img} className="card-img-top img-fluid" alt={`Imagem do ${name}`} />
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </a>
      ) : (
        <Link to={encaminhar} className="card-link">
          <div className="card" style={{ width: '100%' }}>
            <img src={img} className="card-img-top img-fluid" alt={`Imagem do ${name}`} />
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CardComponent;
