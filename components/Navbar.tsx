import React from 'react';
import mainLogo from '../public/assets/Pokemon-Logo.svg';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <header className="bg-secondary-color px-6 py-6 rounded-3xl flex justify-between items-center">
      <Image src={mainLogo} alt="main-logo" height={20} width={140} />
      <nav className="flex gap-20 capitalize text-lg">
        <a href="/home" className="nav-items">
          home
        </a>
        <a href="/battle" className="nav-items">
          battle
        </a>
        <a href="/history" className="nav-items">
          history
        </a>
        <a href="/pokedex" className="nav-items">
          pokedex
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
