import React from 'react';
import Nav from './Nav'; // Nav fixo
import Footer from './Footer'; // Footer fixo
import { Outlet } from 'react-router-dom'; // O Outlet para renderizar o conteúdo das páginas

const Layout = () => {
  return (
    <div className="App">
      <Nav /> {/* Navegação fixa */}
      <main>
        <Outlet /> {/* O conteúdo das rotas será renderizado aqui */}
      </main>
      <Footer /> {/* Rodapé fixo */}
    </div>
  );
};

export default Layout;
