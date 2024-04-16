import React from 'react';
import SearchCity from './SearchCity';
import WindDirection from './WindDirection';
import WindSpeed from './WindSpeed';

const SearchLocation = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 w-full max-w-lg">
      <SearchCity />
      <WindDirection />
      <WindSpeed />
      </div>
    </div>
  );
};

export default SearchLocation;
