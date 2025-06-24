import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <h1>MiTienda</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><a href="#" style={{ color: 'white' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white' }}>Productos</a></li>
        <li><a href="#" style={{ color: 'white' }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
