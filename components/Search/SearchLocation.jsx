// SearchLocation.js
import React from 'react';
import SearchCity from './SearchCity';
import WindDirection from './WindDirection';
import WindSpeed from './WindSpeed';

const SearchLocation = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-transparent p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-lg">
        <SearchCity />
        <div className="mt-8">
          <WindDirection />
        </div>
        <div className="mt-8">
          <WindSpeed />
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
