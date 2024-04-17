import React from 'react';
import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <img src={logo1} alt="Kitesurf Logo" className="h-20 w-auto" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Find the best Kitesurfing day </h1>
        <h1 className="text-2xl font-bold">anytime, anywhere ! </h1>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
