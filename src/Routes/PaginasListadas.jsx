import React from "react";
import "./PaginasListadas.css";
import img1 from "./img1.jpg"; // Substitua pelos caminhos corretos
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const livros = [
  {
    id: 1,
    titulo: "Livro 1",
    imagem: img1, // Caminho da imagem importada
    kindleLink: "https://kindle-link-livro1.com",
    pdfLink: "https://pdf-link-livro1.com",
  },
  {
    id: 2,
    titulo: "Livro 2",
    imagem: img2,
    kindleLink: "https://kindle-link-livro2.com",
    pdfLink: "https://pdf-link-livro2.com",
  },
  {
    id: 3,
    titulo: "Livro 3",
    imagem: img3,
    kindleLink: "https://kindle-link-livro3.com",
    pdfLink: "https://pdf-link-livro3.com",
  },
  {
    id: 4,
    titulo: "Livro 4",
    imagem: img4,
    kindleLink: "https://kindle-link-livro4.com",
    pdfLink: "https://pdf-link-livro4.com",
  },
];

  

  const PaginasListadas = () => {
    return (
      <div className="livros-container">
        {livros.map((livro) => (
          <div className="livro-card" key={livro.id}>
            <img src={livro.imagem} alt={livro.titulo} className="livro-imagem" />
            <h2>{livro.titulo}</h2>
            <div className="links">
              <a href={livro.kindleLink} target="_blank" rel="noopener noreferrer">
                Kindle
              </a>
              <a href={livro.pdfLink} target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default PaginasListadas;
  


