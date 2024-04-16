import React from 'react';
import SearchCity from './SearchCity';
import WindDirection from './WindDirection';
import WindSpeed from './WindSpeed';

const SearchLocation = () => {
  return (
    <>
      <SearchCity />
      <WindDirection />
      <WindSpeed />
    </>
  );
};

export default SearchLocation;
