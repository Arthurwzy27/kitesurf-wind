import React from 'react';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo3 from '../img/logo3.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <img src={logo3} alt="Kitesurf Logo" className="h-10 w-auto" />
    </header>
  );
};

export default Header;
