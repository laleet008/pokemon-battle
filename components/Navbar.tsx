'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import mainLogo from '../public/assets/Pokemon-Logo.svg';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-secondary-color px-6 py-6 rounded-3xl flex justify-between items-center">
      <Image src={mainLogo} alt="main-logo" height={20} width={140} />
      <nav className="flex gap-20 capitalize text-lg relative">
        <a href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
          Home
        </a>
        <a
          href="/battle"
          className={`nav-item 
            ${pathname === '/battle' ? 'active' : ''}
          }`}
        >
          battle
        </a>
        <a
          href="/history"
          className={`nav-item 
            ${pathname === '/history' ? 'active' : ''}
          }`}
        >
          history
        </a>
        <a
          href="/pokedex"
          className={`nav-item 
          ${pathname === '/pokedex' ? 'active' : ''}
        }`}
        >
          pokedex
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
