import React from 'react';
import logo3 from '../img/logo3.png';
import SearchCity from './Search/SearchCity';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <img src={logo3} alt="Kitesurf Logo" className="h-10 w-auto mr-4" />
      <div className="flex-grow pl-4">
        <SearchCity className="w-full mb-4" />
      </div>
    </header>
  );
};

export default Header;
